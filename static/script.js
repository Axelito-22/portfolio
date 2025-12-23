// Typing + deleting loop for the hero name
document.addEventListener('DOMContentLoaded', function () {
	const el = document.getElementById('typed-name');
	if (!el) return;

	const texts = ['Axel Pereira', 'um programador'];
	const typingDelay = 100; // ms per char
	const erasingDelay = 60;
	const newTextDelay = 1000; // pause before erasing
	let textIndex = 0;
	let charIndex = 0;

	function type() {
		el.classList.add('typing');
		if (charIndex < texts[textIndex].length) {
			el.textContent += texts[textIndex].charAt(charIndex);
			charIndex++;
			setTimeout(type, typingDelay);
		} else {
			// finished typing, wait then erase
			setTimeout(erase, newTextDelay);
		}
	}

	function erase() {
		if (charIndex > 0) {
			el.textContent = texts[textIndex].substring(0, charIndex - 1);
			charIndex--;
			setTimeout(erase, erasingDelay);
		} else {
			// move to next text
			textIndex = (textIndex + 1) % texts.length;
			setTimeout(type, 300);
		}
	}

	// start
	setTimeout(type, 500);
});

// Tabs switching for Estudos/Experiência
document.addEventListener('DOMContentLoaded', function () {
	const tabButtons = document.querySelectorAll('.tab-button');
	const tabPanes = document.querySelectorAll('.tab-pane');
	if (!tabButtons.length) return;

	tabButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			const target = btn.getAttribute('data-tab');

			tabButtons.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');

			tabPanes.forEach(p => {
				if (p.id === target) p.classList.add('active');
				else p.classList.remove('active');
			});
		});
	});
});
