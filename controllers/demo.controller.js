// topsisController.js

// Static data for decision matrix (alternatives and criteria scores)
const penilaianData = [
    { nama: 'Egidius S Berek', kriteria_nilai: [4, 5, 3, 1, 1, 1] },
    { nama: 'Caytano Lopes', kriteria_nilai: [1, 1, 1, 5, 4, 3] },
    { nama: 'Rahimun Hasan', kriteria_nilai: [1, 5, 1, 3, 2, 1] },
    { nama: 'Adrian Nomseo', kriteria_nilai: [5, 5, 3, 1, 1, 1] },
    { nama: 'Mario A Kitu', kriteria_nilai: [1, 1, 1, 5, 4, 1] }
];

// Static data for weights of the criteria
const bobotKriteria = [25, 15, 20, 10, 15, 15];

// Function to calculate the normalized matrix
const calculateNormalizedMatrix = (data) => {
    const numberOfCriteria = data[0].kriteria_nilai.length;
    const divisors = Array(numberOfCriteria).fill(0);

    data.forEach(row => {
        row.kriteria_nilai.forEach((val, index) => {
            divisors[index] += Math.pow(val, 2);
        });
    });

    const sqrtDivisors = divisors.map(sum => Math.sqrt(sum));

    return data.map(row => {
        return {
            nama: row.nama,
            normalizedValues: row.kriteria_nilai.map((val, index) => (val / sqrtDivisors[index]).toFixed(6))
        };
    });
};

// Function to calculate the weighted normalized matrix
const calculateWeightedMatrix = (normalizedData, weights) => {
    return normalizedData.map(row => {
        return {
            nama: row.nama,
            weightedValues: row.normalizedValues.map((val, index) => (val * weights[index] / 100).toFixed(6))
        };
    });
};

// Function to calculate the ideal solutions (best and worst)
const calculateIdealSolutions = (weightedData) => {
    const numberOfCriteria = weightedData[0].weightedValues.length;
    const idealBest = Array(numberOfCriteria).fill(-Infinity);
    const idealWorst = Array(numberOfCriteria).fill(Infinity);

    weightedData.forEach(row => {
        row.weightedValues.forEach((val, index) => {
            val = parseFloat(val);
            idealBest[index] = Math.max(idealBest[index], val);
            idealWorst[index] = Math.min(idealWorst[index], val);
        });
    });

    return { idealBest, idealWorst };
};

// Function to calculate distances to ideal solutions
const calculateDistance = (weightedData, idealSolutions) => {
    const { idealBest, idealWorst } = idealSolutions;

    return weightedData.map(row => {
        let distanceToBest = 0;
        let distanceToWorst = 0;

        row.weightedValues.forEach((val, index) => {
            val = parseFloat(val);
            distanceToBest += Math.pow(val - idealBest[index], 2);
            distanceToWorst += Math.pow(val - idealWorst[index], 2);
        });

        return {
            nama: row.nama,
            distanceToBest: Math.sqrt(distanceToBest),
            distanceToWorst: Math.sqrt(distanceToWorst)
        };
    });
};

// Function to calculate the closeness coefficient (preference value)
const calculateClosenessCoefficient = (distances) => {
    return distances.map(row => {
        const preferenceValue = (row.distanceToWorst / (row.distanceToBest + row.distanceToWorst)).toFixed(6);
        return { nama: row.nama, preferenceValue };
    });
};

// Main TOPSIS calculation function
const runTOPSIS = () => {
    const normalizedMatrix = calculateNormalizedMatrix(penilaianData);
    const weightedMatrix = calculateWeightedMatrix(normalizedMatrix, bobotKriteria);
    const idealSolutions = calculateIdealSolutions(weightedMatrix);
    const distances = calculateDistance(weightedMatrix, idealSolutions);
    return calculateClosenessCoefficient(distances);
};

// Exporting the TOPSIS calculation controller function
export const getTOPSISResult = (req, res) => {
    const closenessCoefficients = runTOPSIS();
    res.render('demo', {
        penilaianData,
        bobotKriteria,
        closenessCoefficients
    });
};
