// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Progetto Sunrise",
		description: "Design residenziale moderno con luce naturale e materiali sostenibili. Questo progetto presenta approcci innovativi agli spazi abitativi contemporanei con enfasi sulla coscienza ambientale e l'armonia estetica.",
		images: [
			"images/projects/sunrise/01.jpg",
			"images/projects/sunrise/02.jpg",
			"images/projects/sunrise/03.jpg",
			"images/projects/sunrise/04.jpg"
		]
	},
	alvorada: {
		title: "Progetto Alvorada",
		description: "Un progetto residenziale elegante con geometria espressiva e interni luminosi. Combina forme architettoniche pulite con materiali di grande qualità.",
		images: [
			"images/projects/alvorada/01.png",
			"images/projects/alvorada/02.png",
			"images/projects/alvorada/03.png",
			"images/projects/alvorada/04.png"
		]
	},
	bosque: {
		title: "Progetto Bosque",
		description: "Un progetto d'interni ispirato alla natura che utilizza texture organiche e illuminazione soffusa per creare un'atmosfera rilassante.",
		images: [
			"images/projects/bosque/01.jpg",
			"images/projects/bosque/02.jpg",
			"images/projects/bosque/03.jpg",
			"images/projects/bosque/04.jpg"
		]
	},
	wood: {
		title: "Progetto Wood",
		description: "Design ecologico che incorpora elementi naturali in legno. Una miscela armoniosa di materiali organici e principi di design moderni che creano spazi caldi e accoglienti.",
		images: [
			"images/projects/wood/01.png",
			"images/projects/wood/02.png",
			"images/projects/wood/03.png",
			"images/projects/wood/04.png"
		]
	},
	clinicaAlpes: {
		title: "Progetto Clinica Alpes",
		description: "Interventi d'interni per cliniche con dettagli sobri, superfici calme e un’atmosfera rilassante.",
		images: [
			"images/projects/clinica-alpes/01.jpg",
			"images/projects/clinica-alpes/02.jpg",
			"images/projects/clinica-alpes/03.png",
			"images/projects/clinica-alpes/04.png"
		]
	},
	curves: {
		title: "Progetto Curves",
		description: "Uno spazio scultoreo con forme fluide, linee morbide e un'elegante identità visiva.",
		images: [
			"images/projects/curves/01.png",
			"images/projects/curves/02.png",
			"images/projects/curves/03.png",
			"images/projects/curves/04.png"
		]
	},
	duplex: {
		title: "Progetto Duplex",
		description: "Un duplex contemporaneo con spazi interconnessi e finiture raffinate, ideale per la vita familiare moderna.",
		images: [
			"images/projects/duplex/01.jpg",
			"images/projects/duplex/02.jpg",
			"images/projects/duplex/03.jpg",
			"images/projects/duplex/04.jpg"
		]
	},
	marbleLines: {
		title: "Progetto Marble Lines",
		description: "Un bagno elegante con venature marmoree, superfici nobili e dettagli raffinati.",
		images: [
			"images/projects/marble-lines/01.png",
			"images/projects/marble-lines/02.png",
			"images/projects/marble-lines/03.png",
			"images/projects/marble-lines/04.png"
		]
	},
	rooftop: {
		title: "Progetto Rooftop",
		description: "Uno spazio di copertura arioso con vista, materiali naturali e una connessione contemporanea all'esterno.",
		images: [
			"images/projects/rooftop/01.png",
			"images/projects/rooftop/02.png",
			"images/projects/rooftop/03.png",
			"images/projects/rooftop/04.png"
		]
	},
	white: {
		title: "Progetto White",
		description: "Interni netti e luminosi con texture morbide e una combinazione di toni chiari.",
		images: [
			"images/projects/white/01.png",
			"images/projects/white/02.png",
			"images/projects/white/03.png",
			"images/projects/white/04.png"
		]
	},
	wcMaster: {
		title: "Progetto WC Master",
		description: "Bagno padronale con finiture morbide, illuminazione studiata e un layout elegante.",
		images: [
			"images/projects/wc-master/01.png",
			"images/projects/wc-master/02.png",
			"images/projects/wc-master/03.png",
			"images/projects/wc-master/04.png"
		]
	}
};

// Open modal function
function openProjectModal(projectId, event) {
	if (event) {
		event.preventDefault();
		event.stopPropagation();
	}

	const project = projectData[projectId];
	if (!project) return;

	// Set content
	document.getElementById('modalTitle').textContent = project.title;
	document.getElementById('modalDescription').textContent = project.description;

	// Set images
	document.getElementById('modalImg1').src = project.images[0];
	document.getElementById('modalImg2').src = project.images[1];
	document.getElementById('modalImg3').src = project.images[2];
	document.getElementById('modalImg4').src = project.images[3];

	// Show modal
	const modal = document.getElementById('projectModal');
	const modalContent = modal.querySelector('.modal-content');

	modal.style.display = 'block';
	document.body.classList.add('modal-open');

	// Scroll the modal content into view on mobile
	requestAnimationFrame(() => {
		modalContent.scrollIntoView({ behavior: 'instant', block: 'start' });
	});

	return false;
}

// Close modal function
function closeProjectModal() {
	const modal = document.getElementById('projectModal');
	modal.style.display = 'none';
	document.body.classList.remove('modal-open');
}

// Close modal when clicking outside the content
window.onclick = function(event) {
	const modal = document.getElementById('projectModal');
	if (event.target == modal) {
		closeProjectModal();
	}
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		closeProjectModal();
	}
});
