// Project data with images and descriptions
const projectData = {
	sunrise: {
		title: "Project Sunrise",
		description: "Modern residential design featuring natural light and sustainable materials. This project showcases innovative approaches to contemporary living spaces with emphasis on environmental consciousness and aesthetic harmony.",
		images: [
			"images/projects/sunrise/01.jpg",
			"images/projects/sunrise/02.jpg",
			"images/projects/sunrise/03.jpg",
			"images/projects/sunrise/04.jpg"
		]
	},
	alvorada: {
		title: "Project Alvorada",
		description: "A refined residential project with expressive geometry and luminous interior spaces. It blends clean architectural forms with thoughtful material detail.",
		images: [
			"images/projects/alvorada/01.png",
			"images/projects/alvorada/02.png",
			"images/projects/alvorada/03.png",
			"images/projects/alvorada/04.png"
		]
	},
	bosque: {
		title: "Project Bosque",
		description: "A warm, nature-inspired interior project that uses organic textures and soft lighting for a calm, atmospheric result.",
		images: [
			"images/projects/bosque/01.jpg",
			"images/projects/bosque/02.jpg",
			"images/projects/bosque/03.jpg",
			"images/projects/bosque/04.jpg"
		]
	},
	wood: {
		title: "Project Wood",
		description: "Eco-friendly design incorporating natural wood elements. A harmonious blend of organic materials and modern design principles creating warm, inviting spaces.",
		images: [
			"images/projects/wood/01.png",
			"images/projects/wood/02.png",
			"images/projects/wood/03.png",
			"images/projects/wood/04.png"
		]
	},
	clinicaAlpes: {
		title: "Project Clinica Alpes",
		description: "A clinical interior design with refined details and calm material palettes, tailored for professional healthcare spaces.",
		images: [
			"images/projects/clinica-alpes/01.jpg",
			"images/projects/clinica-alpes/02.jpg",
			"images/projects/clinica-alpes/03.png",
			"images/projects/clinica-alpes/04.png"
		]
	},
	curves: {
		title: "Project Curves",
		description: "A sculptural interior concept with flowing forms, warm lighting, and elegant architectural movement.",
		images: [
			"images/projects/curves/01.png",
			"images/projects/curves/02.png",
			"images/projects/curves/03.png",
			"images/projects/curves/04.png"
		]
	},
	duplex: {
		title: "Project Duplex",
		description: "A contemporary duplex with spatial layering and refined finishes, designed for adaptive family living.",
		images: [
			"images/projects/duplex/01.jpg",
			"images/projects/duplex/02.jpg",
			"images/projects/duplex/03.jpg",
			"images/projects/duplex/04.jpg"
		]
	},
	marbleLines: {
		title: "Project Marble Lines",
		description: "A luxurious interior scheme featuring marble details, texture contrast, and elegant bathroom design.",
		images: [
			"images/projects/marble-lines/01.png",
			"images/projects/marble-lines/02.png",
			"images/projects/marble-lines/03.png",
			"images/projects/marble-lines/04.png"
		]
	},
	rooftop: {
		title: "Project Rooftop",
		description: "A bright rooftop living space with layered views, natural materials, and contemporary outdoor connection.",
		images: [
			"images/projects/rooftop/01.png",
			"images/projects/rooftop/02.png",
			"images/projects/rooftop/03.png",
			"images/projects/rooftop/04.png"
		]
	},
	white: {
		title: "Project White",
		description: "A crisp interior scheme that balances light-filled spaces, clean details, and soft, neutral textures.",
		images: [
			"images/projects/white/01.png",
			"images/projects/white/02.png",
			"images/projects/white/03.png",
			"images/projects/white/04.png"
		]
	},
	wcMaster: {
		title: "Project WC Master",
		description: "A master bathroom design with calming finishes, elegant tile layouts, and carefully composed lighting.",
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
