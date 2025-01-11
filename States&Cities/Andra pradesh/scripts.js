// function initMap() {
//     const locations = {
//         'map-vizag': { lat: 17.6868, lng: 83.2185 },
//         'map-vijayawada': { lat: 16.5062, lng: 80.6480 },
//         'map-amaravati': { lat: 16.5200, lng: 80.5300 },
//         'map-tirupati': { lat: 13.6288, lng: 79.4192 },
//         'map-rajahmundry': { lat: 17.0030, lng: 81.7708 },
//         'map-araku': { lat: 18.3673, lng: 82.7768 },
//         'map-horsley': { lat: 13.6942, lng: 78.8508 },
//         'map-srisailam': { lat: 16.0671, lng: 78.8994 },
//         'map-ahobilam': { lat: 14.1373, lng: 78.7223 },
//         'map-lepakshi': { lat: 13.6831, lng: 77.7865 },
//         'map-annavaram': { lat: 17.6413, lng: 82.7307 },
//         'map-simhachalam': { lat: 17.7341, lng: 83.1640 },
//         'map-mahanandi': { lat: 15.6123, lng: 78.2320 },
//         'map-gandikota': { lat: 14.3962, lng: 78.3484 },
//         'map-chandragiri': { lat: 13.3284, lng: 79.2703 },
//         'map-amaravati-arch': { lat: 16.5200, lng: 80.5300 },
//         'map-undavalli': { lat: 16.5167, lng: 80.6167 },
//         'map-kolleru': { lat: 16.6300, lng: 81.0200 },
//         'map-pulicat': { lat: 13.4931, lng: 80.3390 },
//         'map-nagarjuna-sagar': { lat: 16.7850, lng: 79.2734 },
//         'map-papi-hills': { lat: 17.4544, lng: 81.6431 },
//         'map-rushikonda': { lat: 17.7596, lng: 83.3130 },
//         'map-ramakrishna': { lat: 17.6884, lng: 83.3123 },
//         'map-yarada': { lat: 17.7367, lng: 83.3210 },
//         'map-bheemunipatnam': { lat: 17.9414, lng: 83.4414 },
//         'map-kailasagiri': { lat: 17.7292, lng: 83.3017 },
//         'map-bhavani-island': { lat: 16.5295, lng: 80.6305 },
//         'map-kondapalli': { lat: 16.5438, lng: 80.6491 },
//         'map-sri-venkateswara': { lat: 13.6288, lng: 79.4192 },
//         'map-kambalakonda': { lat: 17.7575, lng: 83.3185 },
//         'map-coringa': { lat: 16.9330, lng: 82.0065 },
//         'map-belum-caves': { lat: 15.5678, lng: 78.8024 },
//         'map-kuchipudi': { lat: 14.3765, lng: 79.9882 },
//         'map-draksharama': { lat: 17.4305, lng: 81.7151 },
//         'map-nagarjunakonda': { lat: 16.7242, lng: 79.1997 }
//     };

//     for (const [id, position] of Object.entries(locations)) {
//         new google.maps.Map(document.getElementById(id), {
//             center: position,
//             zoom: 10
//         });
//     }
// }




document.getElementById('searchInput').addEventListener('input', function() {
    let searchText = this.value.toLowerCase();
    let sections = document.querySelectorAll('section');
    let found = false;

    sections.forEach(section => {
        let sectionText = section.innerText.toLowerCase();
        if (sectionText.includes(searchText) && searchText) {
            section.style.display = '';
            if (!found) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                found = true;
            }
        } else {
            section.style.display = 'none';
        }
    });

    if (!found && searchText) {
        document.getElementById('searchInput').classList.add('no-results');
    } else {
        document.getElementById('searchInput').classList.remove('no-results');
    }
});