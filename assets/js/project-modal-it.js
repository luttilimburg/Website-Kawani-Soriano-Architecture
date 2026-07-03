// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Progetto Sunrise",
		description: "Design residenziale moderno con luce naturale e materiali sostenibili. Questo progetto presenta approcci innovativi agli spazi abitativi contemporanei con enfasi sulla coscienza ambientale e l'armonia estetica.",
		images: [
			"images/project-sunrise-1.jpeg",
			"images/project-sunrise-2.jpeg",
			"images/project-sunrise-3.jpeg",
			"images/project-sunrise-4.jpeg"
		]
	},
	cp: {
		title: "Progetto CP",
		description: "Spazio commerciale contemporaneo con soluzioni spaziali innovative. Un'integrazione attenta di forma e funzione che crea un ambiente stimolante per le operazioni commerciali moderne.",
		images: [
			"images/project-cp-1.jpeg",
			"images/project-cp-2.jpeg",
			"images/project-cp-3.jpeg",
			"images/project-cp-4.jpeg"
		]
	},
	au: {
		title: "Progetto AU",
		description: "Architettura urbana che fonde funzionalità ed eccellenza estetica. Questo progetto dimostra come il design contemporaneo possa migliorare la vita urbana rispettando il contesto circostante.",
		images: [
			"images/project-au-1.jpeg",
			"images/project-au-2.jpeg",
			"images/project-au-3.jpeg",
			"images/project-au-4.jpeg"
		]
	},
	wood: {
		title: "Progetto Wood",
		description: "Design ecologico che incorpora elementi naturali in legno. Una miscela armoniosa di materiali organici e principi di design moderni che creano spazi caldi e accoglienti.",
		images: [
			"images/project-wood-1.jpeg",
			"images/project-wood-2.jpeg",
			"images/project-wood-3.jpeg",
			"images/project-wood-4.jpeg"
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
