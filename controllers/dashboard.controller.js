import * as kriteriaRepository from "../repositories/kriteria.repository.js";
import * as narapidanaRepository from "../repositories/narapidana.repository.js";
import * as userRepository from "../repositories/user.repository.js";

export const dashboardPage = async (req, res) => {
  const title = "Dashboard";
  const userData = req.session.user;
  const role = userData?.role;
  const messageLoginSuccess = req.flash("loginSuccessInfo");

  try {
    let viewData = {
      title,
      user: userData,
      messageLoginSuccess,
    };

    let totalNarapidana = 0;

    if (role === "wali pemasyarakatan") {
      totalNarapidana = await narapidanaRepository.countByWaliId(
        userData.id_user
      );
    } else if (role === "koordinator wali") {
      const waliList = await userRepository.getWalisByKoordinator(
        userData.id_user
      );
      const waliIds = waliList.map((w) => w.id_user);
      totalNarapidana = await narapidanaRepository.countByWaliIds(waliIds);

      const jumlahPerWali = await narapidanaRepository.countGroupedByWali(
        waliIds
      );
      viewData.chartData = {
        type: "bar",
        title: "Jumlah Narapidana per Wali",
        data: jumlahPerWali.map((w) => ({
          name: w.nama_wali,
          total: w.total,
        })),
      };
      totalNarapidana, // ✅ DITAMBAHKAN DI SINI
        (viewData.totalWaliPemasyarakatan = waliIds.length);
    } else {
      totalNarapidana = await narapidanaRepository.totalNarapidana();
    }

    if (role === "admin" || role === "wali pemasyarakatan") {
      const totalKriteria = await kriteriaRepository.totalKriteria();
      const totalUser = await userRepository.totalUser();

      viewData = {
        ...viewData,
        totalKriteria,
        totalNarapidana,
        totalUser,
      };

      if (role === "admin") {
        const totalWaliPemasyarakatan = await userRepository.countByRole(
          "wali pemasyarakatan"
        );
        const totalKoordinatorWali = await userRepository.countByRole(
          "koordinator wali"
        );

        viewData.totalWaliPemasyarakatan = totalWaliPemasyarakatan;
        viewData.totalKoordinatorWali = totalKoordinatorWali;

        // Dapatkan distribusi narapidana per wali
        const napiPerWali = await narapidanaRepository.countGroupedByWaliAll();
        viewData.chartData = {
          type: "bar",
          title: "Jumlah Narapidana per Wali Pemasyarakatan",
          data: napiPerWali.map((w) => ({
            name: w.wali.nama_lengkap,
            total: w.total,
          })),
        };
      }
      if (role === "wali pemasyarakatan") {
        const napiRegisterSummary =
          await narapidanaRepository.countGroupedByRegister(userData.id_user);
        viewData.chartData = {
          type: "bar",
          title: "Kategori Register Narapidana",
          data: napiRegisterSummary.map((s) => ({
            name: s.register,
            total: s.total,
          })),
        };
      }
    } else if (role === "koordinator wali") {
      const waliList = await userRepository.getWalisByKoordinator(
        userData.id_user
      );
      const waliIds = waliList.map((w) => w.id_user);

      totalNarapidana = await narapidanaRepository.countByWaliIds(waliIds);

      const jumlahPerWali = await narapidanaRepository.countGroupedByWali(
        waliIds
      );

      viewData = {
        ...viewData,
        totalNarapidana, // ✅ DITAMBAHKAN DI SINI
        totalWaliPemasyarakatan: waliIds.length,
        chartData: {
          type: "bar",
          title: "Jumlah Narapidana per Wali",
          data: jumlahPerWali.map((w) => ({
            name: w.wali.nama_lengkap, // ✅ benar
            total: w.total,
          })),
        },
      };
    } else if (role === "kepala lapas") {
      const totalWaliPemasyarakatan = await userRepository.countByRole(
        "wali pemasyarakatan"
      );

      viewData = {
        ...viewData,
        totalNarapidana,
        totalWaliPemasyarakatan,
      };

      const napiPerWali = await narapidanaRepository.countGroupedByWaliAll();
      viewData.chartData = {
        type: "bar",
        title: "Jumlah Narapidana per Wali Pemasyarakatan",
        data: napiPerWali.map((d) => ({
          name: d.wali.nama_lengkap,
          total: d.total,
        })),
      };
    }

    res.render("dashboard", viewData);
  } catch (error) {
    console.error("Error rendering dashboard:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const myProfilePage = async (req, res) => {
  try {
    // Dapatkan data user dari session dan gunakan sesuai kebutuhan
    const userData = req.session.user;

    res.render("my_profile", {
      user: userData,
    });
  } catch (error) {}
};
