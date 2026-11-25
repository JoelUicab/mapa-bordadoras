/* ==================== RESPALDO DE LEAFLET CSS / JS ==================== */
function loadFallbackLeafletCSS() {
    if (document.getElementById("leaflet-css-fallback")) return;
    const link = document.createElement("link");
    link.id = "leaflet-css-fallback";
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
    document.head.appendChild(link);
}

function ensureLeafletReady(onReady) {
    let resolved = false;
    const finish = () => {
        if (!resolved) {
            resolved = true;
            onReady();
        }
    };

    if (typeof window.L !== "undefined" && typeof window.L.map === "function") {
        finish();
        return;
    }

    const s1 = document.createElement("script");
    s1.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s1.onload = () => {
        if (typeof window.L !== "undefined" && typeof window.L.map === "function") {
            finish();
        } else {
            loadCdnjsLeaflet();
        }
    };
    s1.onerror = loadCdnjsLeaflet;

    function loadCdnjsLeaflet() {
        if (typeof window.L !== "undefined" && typeof window.L.map === "function") {
            finish();
            return;
        }
        const s2 = document.createElement("script");
        s2.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
        s2.onload = finish;
        s2.onerror = finish;
        document.head.appendChild(s2);
    }

    document.head.appendChild(s1);
    setTimeout(finish, 3000);
}

/* ==================== DATOS DE BORDADORAS Y TALLERES DE YUCATÁN ==================== */
const DATA_BORDADORAS_YUCATAN = [
    {
        id: "punto_cruz_yucateco",
        label: "Punto de cruz yucateco",
        color: "#b91c1c",
        iconSvg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg>`,
        items: [
            {
                id: "pc-mani-01",
                name: "Taller Punto de Cruz de Maní",
                municipality: "Maní",
                lat: 20.3869,
                lng: -89.3925,
                artisan: "Colectiva Artesanal de Maní",
                specialty: "Punto de cruz yucateco con cenefas florales y regionales",
                schedule: "Mar a Dom · 09:30 - 16:30",
                description: "Taller en Maní dedicado al bordado en punto de cruz tradicional sobre algodón y manta."
            },
            {
                id: "pc-yaxcaba-02",
                name: "Bordadoras Tradicionales de Yaxcabá",
                municipality: "Yaxcabá",
                lat: 20.5450,
                lng: -88.8320,
                artisan: "Artesanas de Yaxcabá",
                specialty: "Punto de cruz contado a mano y motivos geométricos",
                schedule: "Lun a Vie · 08:30 - 15:30",
                description: "Bordadoras del centro de Yucatán que elaboran piezas en punto de cruz con tradición comunitaria."
            },
            {
                id: "pc-tekax-03",
                name: "Artesanas de Punto de Cruz de Tekax",
                municipality: "Tekax",
                lat: 20.2055,
                lng: -89.2880,
                artisan: "Taller del Sur · Tekax",
                specialty: "Bordado de punto de cruz en blusas y prendas del sur",
                schedule: "Lun a Sáb · 09:00 - 17:00",
                description: "Taller en Tekax con diseños de punto de cruz inspirados en el sur del estado de Yucatán."
            }
        ]
    },
    {
        id: "xookbil_kab",
        label: "Xookbil-k'ab",
        color: "#6d28d9",
        iconSvg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.3L17.8 8 12 11.7 6.2 8 12 4.3zM6 9.8l5 3.1v6.7l-5-3.1V9.8zm7 9.8v-6.7l5-3.1v6.7l-5 3.1z"/></svg>`,
        items: [
            {
                id: "xk-kimbila-01",
                name: "Colectiva Xookbil-K'ab de Kimbilá",
                municipality: "Izamal",
                lat: 20.8965,
                lng: -89.1462,
                artisan: "Maestras de Kimbilá",
                specialty: "Bordado contado a mano (xookbil-k'ab) sobre algodón",
                schedule: "Lun a Sáb · 09:00 - 17:00",
                description: "Artesanas de Kimbilá especializadas en el bordado contado tradicional de Yucatán."
            },
            {
                id: "xk-acanceh-02",
                name: "Taller Xookbil-K'ab de Acancéh",
                municipality: "Acancéh",
                lat: 20.8125,
                lng: -89.4519,
                artisan: "Bordadoras de Acancéh",
                specialty: "Conteo de hilos y cenefas tradicionales",
                schedule: "Lun a Vie · 09:00 - 16:00",
                description: "Taller en Acancéh enfocado en la técnica de conteo preciso de hilos sobre lienzos artesanales."
            },
            {
                id: "xk-tixkokob-03",
                name: "Maestras Xookbil-K'ab de Tixkokob",
                municipality: "Tixkokob",
                lat: 21.0014,
                lng: -89.3944,
                artisan: "Taller Xookbil Tixkokob",
                specialty: "Bordado contado y piezas ornamentales",
                schedule: "Lun a Sáb · 09:00 - 16:30",
                description: "Bordadoras de Tixkokob dedicadas a la práctica del xookbil-k'ab en prendas tradicionales."
            }
        ]
    },
    {
        id: "bordado_a_maquina",
        label: "Bordado a máquina",
        color: "#0369a1",
        iconSvg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff"><path d="M5 17h14v2H5v-2zm2-9h8l2 4v4H5v-4l2-4zm2 2l-1 2h7l-1-2H9zm7-5h2v3h-2V5z"/></svg>`,
        items: [
            {
                id: "bm-kimbila-01",
                name: "Taller de Bordado a Máquina de Kimbilá",
                municipality: "Izamal",
                lat: 20.9020,
                lng: -89.1510,
                artisan: "Taller de Máquina · Kimbilá",
                specialty: "Bordado a máquina de pedal y motivos florales",
                schedule: "Lun a Sáb · 09:00 - 18:00",
                description: "Producción artesanal en Kimbilá con máquina de pedal y diseños tradicionales de colores vivos."
            },
            {
                id: "bm-motul-02",
                name: "Bordados y Confecciones de Motul",
                municipality: "Motul",
                lat: 21.0964,
                lng: -89.2836,
                artisan: "Taller de Motul",
                specialty: "Bordado a máquina en ternos, hipiles y guayaberas",
                schedule: "Lun a Sáb · 09:00 - 17:30",
                description: "Taller en Motul especializado en bordado a máquina con acabados tradicionales yucatecos."
            }
        ]
    },
    {
        id: "hipiles_y_ternos",
        label: "Hipiles y ternos",
        color: "#b45309",
        iconSvg: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff"><path d="M16 3l2.5 2.5-2 2.5L15 7v14H9V7L7.5 8l-2-2.5L8 3h2c0 1.1.9 2 2 2s2-.9 2-2h2z"/></svg>`,
        items: [
            {
                id: "ht-merida-01",
                name: "Taller de Hipiles y Ternos de Mérida",
                municipality: "Mérida",
                lat: 20.9674,
                lng: -89.5926,
                artisan: "Maestras Bordadoras de Mérida",
                specialty: "Confección y bordado de hipiles, ternos y jubones",
                schedule: "Lun a Sáb · 09:00 - 18:00",
                description: "Taller en Mérida especializado en trajes regionales, hipiles de gala y ternos bordados."
            },
            {
                id: "ht-izamal-02",
                name: "Bordados y Ternos de Izamal",
                municipality: "Izamal",
                lat: 20.9333,
                lng: -89.0167,
                artisan: "Taller Tradicional de Izamal",
                specialty: "Hipiles bordados y ternos ceremoniales",
                schedule: "Mar a Dom · 09:30 - 17:00",
                description: "Artesanas de Izamal dedicadas a la elaboración de hipiles y ternos para festividades."
            },
            {
                id: "ht-valladolid-03",
                name: "Artesanas de Hipiles de Valladolid",
                municipality: "Valladolid",
                lat: 20.6897,
                lng: -88.2019,
                artisan: "Colectiva del Oriente · Valladolid",
                specialty: "Hipiles y ternos con bordado yucateco",
                schedule: "Lun a Sáb · 09:00 - 17:30",
                description: "Taller en Valladolid enfocado en hipiles diarios y ternos bordados a mano y a máquina."
            }
        ]
    }
];

/* ==================== LÓGICA DEL MAPA, DIRECTORIO Y MODAL ==================== */
const YUCATAN_CENTER = [20.75, -89.05];
const YUCATAN_ZOOM = 8;

let mapInstance = null;
let osmLayer = null;
let satLayer = null;
let markersLayerGroup = null;
let activeCategoryId = null;
let searchQuery = "";
let selectedWorkshopForModal = null;

function showToast(message) {
    const toast = document.getElementById("toastBanner");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function getAllItemsWithCategory() {
    const list = [];
    DATA_BORDADORAS_YUCATAN.forEach((cat) => {
        (cat.items || []).forEach((item) => {
            list.push({ ...item, categoryId: cat.id, categoryLabel: cat.label, categoryColor: cat.color });
        });
    });
    return list;
}

function getFilteredWorkshops() {
    const q = searchQuery.trim().toLowerCase();
    return getAllItemsWithCategory().filter((w) => {
        const matchesCat = !activeCategoryId || w.categoryId === activeCategoryId;
        if (!matchesCat) return false;
        if (!q) return true;
        return (
            (w.name && w.name.toLowerCase().includes(q)) ||
            (w.municipality && w.municipality.toLowerCase().includes(q)) ||
            (w.artisan && w.artisan.toLowerCase().includes(q)) ||
            (w.specialty && w.specialty.toLowerCase().includes(q)) ||
            (w.categoryLabel && w.categoryLabel.toLowerCase().includes(q))
        );
    });
}

function createPinIcon(color, iconSvg) {
    return L.divIcon({
        className: "pin-marker-container",
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -32],
        html: `
            <div class="pin-teardrop" style="background-color: ${color};">
                <div class="pin-teardrop-inner">${iconSvg}</div>
            </div>
        `
    });
}

function renderMarkers(workshops) {
    const counter = document.getElementById("visibleMarksCounter");
    if (counter) counter.textContent = `Marcas visibles: ${workshops.length}`;

    if (mapInstance && markersLayerGroup && typeof L.divIcon === "function") {
        markersLayerGroup.clearLayers();
        const catMap = new Map(DATA_BORDADORAS_YUCATAN.map((c) => [c.id, c]));

        workshops.forEach((w) => {
            const cat = catMap.get(w.categoryId);
            const icon = createPinIcon(w.categoryColor || "#b91c1c", cat ? cat.iconSvg : "");
            const marker = L.marker([w.lat, w.lng], { icon });

            marker.bindPopup(`
                <div style="min-width:190px;font-family:Inter,sans-serif;">
                    <div style="font-size:11px;font-weight:700;color:${w.categoryColor || "#b91c1c"};">${w.categoryLabel}</div>
                    <div style="font-size:13px;font-weight:700;color:#111827;margin:2px 0;">${w.name}</div>
                    <div style="font-size:11.5px;color:#4b5563;">${w.municipality}, Yucatán</div>
                </div>
            `);

            marker.on("click", () => openWorkshopModal(w));
            marker.addTo(markersLayerGroup);
        });
    } else {
        renderFallbackSvgPins(workshops);
    }
}

function renderFallbackSvgPins(workshops) {
    const fallback = document.getElementById("svgFallbackLayer");
    const group = document.getElementById("fallbackPinsGroup");
    if (!fallback || !group) return;
    fallback.classList.add("active");
    group.innerHTML = "";

    workshops.forEach((w) => {
        const x = ((w.lng + 90.4) / 3.2) * 560 + 130;
        const y = ((21.65 - w.lat) / 2.2) * 310 + 90;
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(Math.max(140, Math.min(670, x))));
        circle.setAttribute("cy", String(Math.max(100, Math.min(390, y))));
        circle.setAttribute("r", "7");
        circle.setAttribute("fill", w.categoryColor || "#b91c1c");
        circle.setAttribute("stroke", "#ffffff");
        circle.setAttribute("stroke-width", "2");
        circle.style.cursor = "pointer";
        circle.addEventListener("click", () => openWorkshopModal(w));
        group.appendChild(circle);
    });
}

function renderCategoriesDirectory() {
    const container = document.getElementById("categoriesRowsContainer");
    if (!container) return;
    container.innerHTML = "";

    const q = searchQuery.trim().toLowerCase();

    DATA_BORDADORAS_YUCATAN.forEach((cat) => {
        const matchingItems = (cat.items || []).filter((item) => {
            if (!q) return true;
            return (
                (item.name && item.name.toLowerCase().includes(q)) ||
                (item.municipality && item.municipality.toLowerCase().includes(q)) ||
                (item.artisan && item.artisan.toLowerCase().includes(q)) ||
                (item.specialty && item.specialty.toLowerCase().includes(q)) ||
                cat.label.toLowerCase().includes(q)
            );
        });

        if (q && matchingItems.length === 0) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `category-row-btn ${activeCategoryId === cat.id ? "active" : ""}`;
        btn.innerHTML = `
            <span class="category-row-left">
                <span class="category-icon-box">${cat.iconSvg}</span>
                <span class="category-row-label">${cat.label}</span>
            </span>
            <span class="category-row-right">
                <span class="category-count-pill">${matchingItems.length}</span>
                <span class="category-row-caret">&#9656;</span>
            </span>
        `;

        btn.addEventListener("click", () => {
            if (activeCategoryId === cat.id) {
                closeSubmenu();
            } else {
                openCategorySubmenu(cat.id, matchingItems);
            }
        });

        container.appendChild(btn);
    });
}

function syncLayoutAfterSubmenuToggle() {
    if (mapInstance) {
        setTimeout(() => {
            mapInstance.invalidateSize({ pan: false });
        }, 190);
    }
}

function openCategorySubmenu(catId, itemsOverride) {
    const cat = DATA_BORDADORAS_YUCATAN.find((c) => c.id === catId);
    if (!cat) return;

    activeCategoryId = catId;
    renderCategoriesDirectory();

    const layout = document.getElementById("mainLayout");
    const col = document.getElementById("sideSubmenuColumn");
    const swatch = document.getElementById("submenuSwatch");
    const heading = document.getElementById("submenuHeading");
    const listEl = document.getElementById("submenuWorkshopList");

    if (layout) layout.classList.add("submenu-open");
    if (col) col.classList.add("open");
    if (swatch) swatch.style.backgroundColor = cat.color || "#b91c1c";
    if (heading) heading.textContent = cat.label;

    const workshops = itemsOverride || (cat.items || []).map((w) => ({
        ...w,
        categoryId: cat.id,
        categoryLabel: cat.label,
        categoryColor: cat.color
    }));

    if (listEl) {
        listEl.innerHTML = "";
        workshops.forEach((w) => {
            const fullW = { ...w, categoryId: cat.id, categoryLabel: cat.label, categoryColor: cat.color };
            const itemBtn = document.createElement("button");
            itemBtn.type = "button";
            itemBtn.className = "submenu-workshop-btn";
            itemBtn.innerHTML = `
                <span class="submenu-workshop-title">${w.name}</span>
                <span class="submenu-workshop-meta">${w.municipality} · ${w.schedule}</span>
            `;
            itemBtn.addEventListener("click", () => {
                focusWorkshopOnMap(fullW);
                openWorkshopModal(fullW);
            });
            listEl.appendChild(itemBtn);
        });
    }

    renderMarkers(getFilteredWorkshops());
    syncLayoutAfterSubmenuToggle();
}

function closeSubmenu() {
    activeCategoryId = null;
    const layout = document.getElementById("mainLayout");
    const col = document.getElementById("sideSubmenuColumn");
    if (layout) layout.classList.remove("submenu-open");
    if (col) col.classList.remove("open");
    renderCategoriesDirectory();
    renderMarkers(getFilteredWorkshops());
    syncLayoutAfterSubmenuToggle();
}

function focusWorkshopOnMap(w) {
    if (mapInstance && typeof w.lat === "number" && typeof w.lng === "number") {
        mapInstance.setView([w.lat, w.lng], 12, { animate: true });
    }
}

function openWorkshopModal(w) {
    selectedWorkshopForModal = w;
    const modal = document.getElementById("workshopDetailModal");
    if (!modal) return;

    document.getElementById("modalCategoryPill").textContent = w.categoryLabel || "Bordadoras";
    document.getElementById("modalWorkshopName").textContent = w.name;
    document.getElementById("modalMunicipalitySub").textContent = `${w.municipality}, Yucatán`;
    document.getElementById("modalWorkshopDesc").textContent = w.description || "";
    document.getElementById("modalArtisanDetail").textContent = w.artisan || "—";
    document.getElementById("modalSpecialtyDetail").textContent = w.specialty || "—";
    document.getElementById("modalScheduleDetail").textContent = w.schedule || "—";
    document.getElementById("modalCoordsDetail").textContent = `${w.lat.toFixed(4)}, ${w.lng.toFixed(4)}`;

    const routeLink = document.getElementById("modalRouteExternalLink");
    if (routeLink) {
        routeLink.href = `https://www.google.com/maps/dir/?api=1&destination=${w.lat},${w.lng}`;
    }

    modal.classList.add("open");
}

function closeWorkshopModal() {
    const modal = document.getElementById("workshopDetailModal");
    if (modal) modal.classList.remove("open");
}

function initMap() {
    if (typeof window.L === "undefined" || typeof window.L.map !== "function") {
        renderMarkers(getFilteredWorkshops());
        return;
    }

    mapInstance = L.map("map", {
        center: YUCATAN_CENTER,
        zoom: YUCATAN_ZOOM,
        zoomControl: true
    });

    osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
    });

    satLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        maxZoom: 19
    });

    osmLayer.addTo(mapInstance);
    markersLayerGroup = L.layerGroup().addTo(mapInstance);

    osmLayer.on("tileerror", () => {
        showToast("Mostrando respaldo local si algún mosaico tarda en cargar.");
    });

    renderMarkers(getFilteredWorkshops());
}

function bindUIEvents() {
    const dirHeader = document.getElementById("directoryHeaderToggle");
    const dirBody = document.getElementById("directoryBody");
    if (dirHeader && dirBody) {
        const toggleDir = () => {
            const isCollapsed = dirBody.classList.toggle("collapsed");
            dirHeader.classList.toggle("collapsed", isCollapsed);
            dirHeader.setAttribute("aria-expanded", String(!isCollapsed));
        };
        dirHeader.addEventListener("click", toggleDir);
        dirHeader.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleDir();
            }
        });
    }

    const searchInput = document.getElementById("directorySearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value || "";
            renderCategoriesDirectory();
            renderMarkers(getFilteredWorkshops());
            if (activeCategoryId) {
                const cat = DATA_BORDADORAS_YUCATAN.find((c) => c.id === activeCategoryId);
                if (cat) {
                    const q = searchQuery.trim().toLowerCase();
                    const filteredCatItems = (cat.items || []).filter((item) => {
                        if (!q) return true;
                        return (
                            (item.name && item.name.toLowerCase().includes(q)) ||
                            (item.municipality && item.municipality.toLowerCase().includes(q)) ||
                            (item.artisan && item.artisan.toLowerCase().includes(q)) ||
                            (item.specialty && item.specialty.toLowerCase().includes(q))
                        );
                    });
                    openCategorySubmenu(cat.id, filteredCatItems);
                }
            }
        });
    }

    const closeSubBtn = document.getElementById("closeDetachedSubmenuBtn");
    if (closeSubBtn) closeSubBtn.addEventListener("click", closeSubmenu);

    document.querySelectorAll(".basemap-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".basemap-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const mode = btn.getAttribute("data-basemap");
            if (mapInstance && osmLayer && satLayer) {
                if (mode === "satelite") {
                    if (mapInstance.hasLayer(osmLayer)) mapInstance.removeLayer(osmLayer);
                    if (!mapInstance.hasLayer(satLayer)) mapInstance.addLayer(satLayer);
                } else {
                    if (mapInstance.hasLayer(satLayer)) mapInstance.removeLayer(satLayer);
                    if (!mapInstance.hasLayer(osmLayer)) mapInstance.addLayer(osmLayer);
                }
            }
        });
    });

    const centerBtn = document.getElementById("centerYucatanBtn");
    if (centerBtn) {
        centerBtn.addEventListener("click", () => {
            if (mapInstance) {
                mapInstance.setView(YUCATAN_CENTER, YUCATAN_ZOOM, { animate: true });
            }
        });
    }

    const closeModalBtn = document.getElementById("closeWorkshopModalBtn");
    const modalBackdrop = document.getElementById("workshopDetailModal");
    const modalCenterBtn = document.getElementById("modalCenterPinBtn");

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeWorkshopModal);
    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", (e) => {
            if (e.target === modalBackdrop) closeWorkshopModal();
        });
    }
    if (modalCenterBtn) {
        modalCenterBtn.addEventListener("click", () => {
            if (selectedWorkshopForModal) {
                focusWorkshopOnMap(selectedWorkshopForModal);
                closeWorkshopModal();
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategoriesDirectory();
    bindUIEvents();
    ensureLeafletReady(() => {
        initMap();
    });
});