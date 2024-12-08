document.addEventListener("DOMContentLoaded", () => {
if (window.location.pathname.includes("contacto.html")) {
    const form = document.querySelector(".contact");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        try {
            const nombre = form.elements[0].value.trim();
            const email = form.elements[1].value.trim();
            const asunto = form.elements[2].value.trim();
            const mensaje = form.elements[3].value.trim();

            if (!nombre) {
                throw new Error("El campo 'Nombre' es obligatorio.");
            }
            if (!email.includes("@")) {
                throw new Error("El campo 'Email' debe contener un '@'.");
            }
            if (!asunto) {
                throw new Error("El campo 'Asunto' es obligatorio.");
            }
            if (!mensaje) {
                throw new Error("El campo 'Mensaje' es obligatorio.");
            }

            console.log(`Formulario enviado:
                Nombre: ${nombre},
                Email: ${email},
                Asunto: ${asunto},
                Mensaje: ${mensaje}`);
            alert(`Gracias por contactarnos, ${nombre}. Pronto responderemos a tu consulta.`);
        } catch (error) {
            console.error("Error en el formulario:", error.message); 
            alert(`Error: ${error.message}`);
        }
    });
}

    if (window.location.pathname.includes("index.html")) {
        const doctores = [
            { nombre: "Dr. Mario", especialidad: "Medicina Interna", experiencia: 10 },
            { nombre: "Dra. Ana Polo", especialidad: "Cirugía General", experiencia: 6 },
            { nombre: "Dr. Nick", especialidad: "Pediatría", experiencia: 3 },
            { nombre: "Dra. Simi", especialidad: "Ginecología", experiencia: 8 },
        ];

        const mainContainer = document.querySelector(".container.py-2");

        const section = document.createElement("section");
        section.className = "mt-4";

        const filtro = doctores.filter((doc) => doc.experiencia > 5);

        if (filtro.length > 0) {
            const titulo = document.createElement("h2");
            titulo.textContent = "Nuestros Médicos Veteranos";
            titulo.className = "text-center mt-4 mb-3";
            section.appendChild(titulo);
        }

        const row = document.createElement("div");
        row.className = "row g-4";

        filtro.forEach((doc) => {
            const div = document.createElement("div");
            div.className = "col-12 col-md-6 col-lg-4";
            div.innerHTML = `
                <div class="card h-100 text-center">
                    <h3>${doc.nombre}</h3>
                    <p><i>${doc.especialidad}</i></p>
                    <p>Experiencia: ${doc.experiencia} años</p>
                </div>
            `;
            row.appendChild(div);
        });

        section.appendChild(row);

        mainContainer.appendChild(section);
    }

    const reservarBtn = document.querySelector(".navbar__link--special");
    reservarBtn.addEventListener("click", () => {
        const nombre = prompt("¿Cuál es tu nombre?");
        if (nombre) {
            alert(`Gracias por reservar con nosotros, ${nombre}.`);
            console.log(`Reserva realizada por: ${nombre}`);
        } else {
            alert("La reserva fue cancelada.");
        }
    });
});
