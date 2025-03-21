const schoolLinks = {
    "school1": {
        name: "SJKC Choong Wen [CW]",
        links: [
            { name: "Attendances", url: "https://docs.google.com/spreadsheets/d/11NA_ggeQK7GsRRp2p2ibrcR_Y07uk5ZI7euOjSJnLzo/edit?usp=sharing" },
            { name: "Ads Poster", url: "https://drive.google.com/drive/u/0/folders/15zLKxn0pl0HUYh90_ts30FsTXkS16aO1" },
            { name: "Permit File", url: "https://drive.google.com/drive/folders/1AvaO6HR9yYVz65QF9g1cEZfZ9CpA4FZF?usp=drive_link" },
            { name: "Sales record", url: "https://docs.google.com/spreadsheets/d/1PEZlIFztsLXEW72Q8b77ujIGM0JJT2lueUDqyoWeVf0/edit?usp=sharing" },
            { name: "Account & Contributions - Emily", url: "https://forms.gle/9j6hHVMp15MgBm6o6" }
            
        ]
    },
    "school2": {
        name: "SJKC Chung Kwok [CKS]",
        links: [
            { name: "Attendances", url: "https://docs.google.com/spreadsheets/d/1keLE0zXeRcDT08_D7X-RFAjBvQk2u5HdCXMPfzLzUkg/edit?usp=sharing" },
            { name: "CKS Calendar", url: "https://drive.google.com/file/d/1UH33smbKFIbiEZT5aXRbMFNb5krE-et7/preview" },
            { name: "Sales record", url: "https://docs.google.com/spreadsheets/d/1E8j8de04m4dcdqqJHUscSk25NAICN1WIAJPNIUYKShM/edit?usp=sharing" },
            { name: "Payment record - Emily", url: "https://docs.google.com/spreadsheets/d/1rpI73_Uoq5SHenEuHQy3Y3cf0DeYJnJHHMf3X4XwmUM/edit?usp=sharing" }
        ]
    },
    "school3": {
        name: "Frontier International School [FRT]",
        links: [
            { name: "Attendance", url: "https://docs.google.com/spreadsheets/d/1_81hW4JyIsYksPXNfOiIh6fsG9upnliGGkpvabDa598/edit?usp=sharing" },
            { name: "Collect Payment", url: "https://eduwelmalaysia.github.io/localschool/error.html" }
        ]
    },
    "school4": {
        name: "Center",
        links: [
            { name: "Sales Report", url: "https://docs.google.com/spreadsheets/d/1UpfXnLqUO1MP_m93RwglwzWEVGpWmJLxgykb8RBdUwc/edit?gid=0#gid=0" },
            { name: "LMS login", url: "https://eduwel.asia/eduvault/login/" }
        ]
    }
};

function updateSchoolDetails() {
    const selectedSchool = document.getElementById("schoolSelect").value;
    const schoolDetails = document.getElementById("schoolDetails");
    const schoolName = document.getElementById("schoolName");
    const buttonsContainer = document.getElementById("buttonsContainer");
    const iframe = document.getElementById("previewFrame");

    // Clear previous buttons
    buttonsContainer.innerHTML = "";
    iframe.style.display = "none"; // Hide iframe initially

    if (selectedSchool && schoolLinks[selectedSchool]) {
        const school = schoolLinks[selectedSchool];

        // Set school name
        schoolName.textContent = school.name;

        // Create buttons
        school.links.forEach(link => {
            let button = document.createElement("button");
            button.style.border = "none";
            button.style.margin = "5px";
            button.style.borderRadius = "20px";

            button.textContent = link.name; // Fix: use correct property name
            
            if (link.url.includes("https://forms.gle") ||  link.url.includes("/folders/")) {
                // If it's a Google Form, open in a new tab
                button.onclick = function () {
                    window.open(link.url, "_blank");
                };
            } else {
                button.onclick = function () {
                    iframe.src = link.url;
                    iframe.style.display = "block";
                    iframe.style.width = "100%";
                    iframe.style.height = "600px";
                };
            }
            buttonsContainer.appendChild(button);
        });

        // Show school details section
        schoolDetails.style.display = "block";
    } else {
        schoolDetails.style.display = "none"; // Hide the section if no school is selected
    }
}
