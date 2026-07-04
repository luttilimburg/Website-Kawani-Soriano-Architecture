// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Projeto Sunrise",
		description: "Design residencial moderno com luz natural e materiais sustentáveis. Este projeto apresenta abordagens inovadoras para espaços de convivência contemporâneos com ênfase na consciência ambiental e harmonia estética.",
		images: [
			"images/projects/sunrise/01.jpg",
			"images/projects/sunrise/02.jpg",
			"images/projects/sunrise/03.jpg",
			"images/projects/sunrise/04.jpg"
		]
	},
	alvorada: {
		title: "Projeto Alvorada",
		description: "Um projeto residencial refinado com geometria expressiva e interiores luminosos. Combina formas arquitetônicas limpas com materiais cuidadosamente escolhidos.",
		images: [
			"images/projects/alvorada/01.png",
			"images/projects/alvorada/02.png",
			"images/projects/alvorada/03.png",
			"images/projects/alvorada/04.png"
		]
	},
	bosque: {
		title: "Projeto Bosque",
		description: "Um projeto de interiores inspirado na natureza que usa texturas orgânicas e iluminação suave para criar uma atmosfera tranquila.",
		images: [
			"images/projects/bosque/01.jpg",
			"images/projects/bosque/02.jpg",
			"images/projects/bosque/03.jpg",
			"images/projects/bosque/04.jpg"
		]
	},
	wood: {
		title: "Projeto Wood",
		description: "Design ecológico incorporando elementos naturais de madeira. Uma mistura harmoniosa de materiais orgânicos e princípios de design modernos criando espaços acolhedores e convidativos.",
		images: [
			"images/projects/wood/01.png",
			"images/projects/wood/02.png",
			"images/projects/wood/03.png",
			"images/projects/wood/04.png"
		]
	},
	clinicaAlpes: {
		title: "Projeto Clinica Alpes",
		description: "Interiores de clínica com detalhes refinados e materiais calmos para proporcionar tranquilidade a pacientes e equipes.",
		images: [
			"images/projects/clinica-alpes/01.jpg",
			"images/projects/clinica-alpes/02.jpg",
			"images/projects/clinica-alpes/03.png",
			"images/projects/clinica-alpes/04.png"
		]
	},
	curves: {
		title: "Projeto Curves",
		description: "Conceito escultórico com formas fluidas, iluminação suave e um ambiente interior elegante.",
		images: [
			"images/projects/curves/01.png",
			"images/projects/curves/02.png",
			"images/projects/curves/03.png",
			"images/projects/curves/04.png"
		]
	},
	duplex: {
		title: "Projeto Duplex",
		description: "Duplex contemporâneo com camadas espaciais e acabamentos refinados, ideal para uma vida familiar moderna.",
		images: [
			"images/projects/duplex/01.jpg",
			"images/projects/duplex/02.jpg",
			"images/projects/duplex/03.jpg",
			"images/projects/duplex/04.jpg"
		]
	},
	marbleLines: {
		title: "Projeto Marble Lines",
		description: "Banheiro luxuoso com detalhes em mármore, superfícies texturizadas e layout elegante.",
		images: [
			"images/projects/marble-lines/01.png",
			"images/projects/marble-lines/02.png",
			"images/projects/marble-lines/03.png",
			"images/projects/marble-lines/04.png"
		]
	},
	rooftop: {
		title: "Projeto Rooftop",
		description: "Espaço de cobertura iluminado com conexão ao exterior e materiais naturais.",
		images: [
			"images/projects/rooftop/01.png",
			"images/projects/rooftop/02.png",
			"images/projects/rooftop/03.png",
			"images/projects/rooftop/04.png"
		]
	},
	white: {
		title: "Projeto White",
		description: "Esquema claro com espaços arejados, detalhes limpos e texturas neutras suaves.",
		images: [
			"images/projects/white/01.png",
			"images/projects/white/02.png",
			"images/projects/white/03.png",
			"images/projects/white/04.png"
		]
	},
	wcMaster: {
		title: "Projeto WC Master",
		description: "Banheiro master com acabamentos calmos, layout refinado e iluminação cuidadosamente composta.",
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

	// Set images - the first shot loads with priority since it's visible
	// immediately; the rest are deferred a tick so they don't compete for
	// bandwidth/decode time with the one the user sees first.
	const img1 = document.getElementById('modalImg1');
	img1.fetchPriority = 'high';
	img1.loading = 'eager';
	img1.src = project.images[0];

	['modalImg2', 'modalImg3', 'modalImg4'].forEach(function (id, i) {
		const img = document.getElementById(id);
		img.fetchPriority = 'low';
		requestAnimationFrame(function () {
			img.src = project.images[i + 1];
		});
	});

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
