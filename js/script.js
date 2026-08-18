const dataRoster = {
    // SENIN: 10 Les + 2 Istirahat
    senin: [
        { no: 1, jam: "07:15 - 08:10", guru: "Upacara Bendera", mapel: "Kegiatan Rutin" },
        { no: 2, jam: "08:10 - 08:50", guru: "ADI WINGRONY N. S.Pd", mapel: "PJOK" },
        { no: 3, jam: "08:50 - 09:30", guru: "ADI WINGRONY N. S.Pd", mapel: "PJOK" },
        { no: 4, jam: "09:30 - 10:10", guru: "ADI WINGRONY N. S.Pd", mapel: "PJOK" },
        
        // Istirahat tanpa nomor les
        { no: "-", jam: "10:10 - 10:25", guru: "-", mapel: "ISTIRAHAT 1" },
        
        { no: 5, jam: "10:25 - 11:05", guru: "HENRIADI N. S.Pd.", mapel: "Bahasa Inggris" },
        { no: 6, jam: "11:05 - 11:45", guru: "HENRIADI N. S.Pd.", mapel: "Bahasa Inggris" },
        { no: 7, jam: "11:45 - 12:25", guru: "HENRIADI N. S.Pd.", mapel: "Bahasa Inggris" },
        
        // Istirahat tanpa nomor les
        { no: "-", jam: "12:25 - 13:25", guru: "-", mapel: "ISTIRAHAT 2" },
        
        { no: 8, jam: "13:25 - 14:05", guru: "ELPIANNA SITUMEANG, S.Pd.", mapel: "Bahasa Indonesia" },
        { no: 9, jam: "14:05 - 14:45", guru: "KHALIDA JUNIARTI, S.Pd.", mapel: "Sosiologi" },
        { no: 10, jam: "14:45 - 15:35", guru: "KHALIDA JUNIARTI, S.Pd.", mapel: "Sosiologi" }
    ],
    selasa: [
        { no: 1, jam: "07:30 - 08:10", guru: "Drs. JANNES PARDEDE, MM.", mapel: "Informatika" },
        { no: 2, jam: "08:10 - 08:50", guru: "Drs. JANNES PARDEDE, MM.", mapel: "Informatika" },
        { no: 3, jam: "08:50 - 09:30", guru: "RINALDI SIMANUNGKALIT, S.Pd.", mapel: "Matematika" },
        { no: 4, jam: "09:30 - 10:10", guru: "ARYATI POHAN, S.Pd.", mapel: "Kimia" },
        { no: "-", jam: "10:10 - 10:25", guru: "-", mapel: "ISTIRAHAT 1" },
        { no: 5, jam: "10:25 - 11:05", guru: "MITRIADI MANALU, S.Pd.", mapel: "Seni Musik" },
        { no: 6, jam: "11:05 - 11:45", guru: "MITRIADI MANALU, S.Pd.", mapel: "Seni Musik" },
        { no: 7, jam: "11:45 - 12:25", guru: "JUMANTA FERAYANTI, S.Pd.", mapel: "PLH" },
        { no: "-", jam: "12:25 - 13:25", guru: "-", mapel: "ISTIRAHAT 2" },
        { no: 8, jam: "13:25 - 14:15", guru: "RAHMAYANTI, S.Pd.", mapel: "Ekonomi" },
        { no: 9, jam: "14:15 - 14:55", guru: "RAHMAYANTI, S.Pd.", mapel: "Ekonomi" },
        { no: 10, jam: "14:55 - 15:35", guru: "RAHMAYANTI, S.Pd.", mapel: "Ekonomi" }
    ],
    rabu: [
        { no: 1, jam: "07:30 - 08:10", guru: "PERDANA, S.Pd.", mapel: "Geografi" },
        { no: 2, jam: "08:10 - 08:50", guru: "PERDANA, S.Pd.", mapel: "Geografi" },
        { no: 3, jam: "08:50 - 09:30", guru: "ARYATI POHAN, S.Pd.", mapel: "Kimia" },
        { no: 4, jam: "09:30 - 10:10", guru: "ARYATI POHAN, S.Pd.", mapel: "Kimia" },
        { no: "-", jam: "10:10 - 10:25", guru: "-", mapel: "ISTIRAHAT 1" },
        { no: 5, jam: "10:25 - 11:05", guru: "RINALDI SIMANUNGKALIT, S.Pd.", mapel: "Matematika Wajib" },
        { no: 6, jam: "11:05 - 11:45", guru: "RINALDI SIMANUNGKALIT, S.Pd.", mapel: "Matematika Wajib" },
        { no: 7, jam: "11:45 - 12:25", guru: "RINALDI SIMANUNGKALIT, S.Pd.", mapel: "Matematika Wajib" },
        { no: "-", jam: "12:25 - 13:25", guru: "-", mapel: "ISTIRAHAT 2" },
        { no: 8, jam: "13:25 - 14:15", guru: "EM", mapel: "Pendidikan Agama" },
        { no: 9, jam: "14:15 - 14:55", guru: "RS", mapel: "Pendidikan Agama" },
        { no: 10, jam: "14:55 - 15:35", guru: "YP", mapel: "Pendidikan Agama" }
    ],
    kamis: [
        { no: 1, jam: "07:30 - 08:10", guru: "EMIGA SIMAMORA, S.Pd.", mapel: "Fisika" },
        { no: 2, jam: "08:10 - 08:50", guru: "EMIGA SIMAMORA, S.Pd.", mapel: "Fisika" },
        { no: 3, jam: "08:50 - 09:30", guru: "EMIGA SIMAMORA, S.Pd.", mapel: "Fisika" },
        { no: 4, jam: "09:30 - 10:10", guru: "MITHA MARBUN, S.Pd.", mapel: "Biologi" },
        { no: "-", jam: "10:10 - 10:25", guru: "-", mapel: "ISTIRAHAT 1" },
        { no: 5, jam: "10:25 - 11:05", guru: "ELPIANNA SITUMEANG, S.Pd.", mapel: "Bahasa Indonesia" },
        { no: 6, jam: "11:05 - 11:45", guru: "ELPIANNA SITUMEANG, S.Pd.", mapel: "Bahasa Indonesia" },
        { no: 7, jam: "11:45 - 12:25", guru: "ELPIANNA SITUMEANG, S.Pd.", mapel: "Bahasa Indonesia" },
        { no: "-", jam: "12:25 - 13:25", guru: "-", mapel: "ISTIRAHAT 2" },
        { no: 8, jam: "13:25 - 14:15", guru: "LISTA V PADARIBU, S.Pd.", mapel: "BK" },
        { no: 9, jam: "14:15 - 14:55", guru: "SALMIAH, S.Pd. M.Pd.", mapel: "PPKn" },
        { no: 10, jam: "14:55 - 15:35", guru: "SALMIAH, S.Pd. M.Pd.", mapel: "PPKn" }
    ],
    jumat: [
        { no: 1, jam: "08:00 - 08:40", guru: "MITHA MARBUN, S.Pd.", mapel: "Biologi" },
        { no: 2, jam: "08:40 - 09:20", guru: "MITHA MARBUN, S.Pd.", mapel: "Biologi" },
        { no: 3, jam: "09:20 - 10:00", guru: "JUMANTA FERAYANTI, S.Pd.", mapel: "PLH" },
        { no: "-", jam: "10:00 - 10:15", guru: "-", mapel: "ISTIRAHAT" },
        { no: 4, jam: "10:15 - 10:55", guru: "KARPINA SIMAMORA, S.Pd.", mapel: "Sejarah" },
        { no: 5, jam: "10:55 - 11:35", guru: "KARPINA SIMAMORA, S.Pd.", mapel: "Sejarah" },
        { no: "-", jam: "11:35 - 12:25", guru: "Ibadah", mapel: "-" }
    ]
};

function showSchedule(hari, element) {
    const tbody = document.getElementById("roster-body");
    const title = document.getElementById("current-day-title");
    
    const displayHari = hari === 'jumat' ? "Jum'at" : hari.charAt(0).toUpperCase() + hari.slice(1);
    title.innerText = `Jadwal Hari ${displayHari}`;

    if (element) {
        document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
        element.classList.add("active");
    }

    tbody.innerHTML = "";
    const schedule = dataRoster[hari];

    schedule.forEach(item => {
        const row = document.createElement("tr");

        // Cek apakah ini jam istirahat
        const isBreak = item.mapel.toUpperCase().includes("ISTIRAHAT");

        if (isBreak) {
            row.classList.add("break-row");
        }

        // Jika istirahat, tampilkan "-", jika bukan tampilkan angkanya
        const nomorTampil = isBreak || item.no === "-" ? "-" : item.no;

        row.innerHTML = `
            <td class="txt-center"><strong>${nomorTampil}</strong></td>
            <td class="jam-cell">${item.jam}</td>
            <td>${item.guru}</td>
            <td>${item.mapel}</td>
        `;

        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showSchedule("senin");
});
