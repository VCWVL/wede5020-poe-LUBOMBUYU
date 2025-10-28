/**
 * Interactive Maps functionality using Leaflet for location display.
 *
 * Function: Embeds Leaflet map with markers, popups, and tab-based navigation for office locations.
 * Usage: Included in contact.html for displaying office locations interactively.
 */

document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.querySelector('.map-container');
    if (!mapContainer) return;

    const locations = [
        {
            id: 'galleria',
            name: 'Galleria Mall',
            address: '123 Main Street, Galleria Mall<br>Durban, South Africa',
            phone: '+27 12 345 6799',
            hours: 'Mon-Fri 8AM-5PM',
            lat: -30.033261474929237,
            lng: 30.895508876222554,
            directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Galleria+Mall+Durban'
        },
        {
            id: 'rosebank',
            name: 'Rosebank Mall',
            address: '456 Commerce Road, Rosebank Mall<br>Johannesburg, South Africa',
            phone: '+27 12 345 6799',
            hours: 'Mon-Fri 8AM-5PM',
            lat: -26.15773528735435,
            lng: 28.0209666964707,
            directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rosebank+Mall+Johannesburg'
        }
    ];

    // Create tab container
    const tabContainer = document.createElement('div');
    tabContainer.className = 'location-tabs';
    mapContainer.appendChild(tabContainer);

    // Create map container
    const mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    mapDiv.style.height = '400px';
    mapDiv.style.width = '100%';
    mapContainer.appendChild(mapDiv);

    // Initialize map centered on South Africa
    const map = L.map('map').setView([-28.0955, 29.4585], 6);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create markers and popups
    const markers = {};
    locations.forEach((loc, index) => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(map);
        const popupContent = `
            <div class="map-popup">
                <h3>${loc.name} Office</h3>
                <p>${loc.address}</p>
                <p><strong>Phone:</strong> ${loc.phone}</p>
                <p><strong>Hours:</strong> ${loc.hours}</p>
                <button class="map-directions-btn" onclick="window.open('${loc.directionsUrl}', '_blank')">Get Directions</button>
            </div>
        `;
        marker.bindPopup(popupContent);
        markers[loc.id] = marker;

        // Create tab button
        const tabButton = document.createElement('button');
        tabButton.className = `location-tab ${index === 0 ? 'active' : ''}`;
        tabButton.setAttribute('data-location', loc.id);
        tabButton.textContent = loc.name;
        tabContainer.appendChild(tabButton);
    });

    // Tab click handler
    tabContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('location-tab')) {
            const targetLocation = e.target.getAttribute('data-location');

            // Update tab active state
            tabContainer.querySelectorAll('.location-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');

            // Center map on selected location and open popup
            const marker = markers[targetLocation];
            if (marker) {
                map.setView(marker.getLatLng(), 15);
                marker.openPopup();
            }
        }
    });

    // Default to first location
    if (locations.length > 0) {
        const firstLoc = locations[0];
        map.setView([firstLoc.lat, firstLoc.lng], 15);
        markers[firstLoc.id].openPopup();
    }
});
