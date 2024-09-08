let toggleButton = document.getElementById('toggleSkills');

let skillsSection =
document.getElementById('skills');

toggleButton?.addEventListener('click', () => {
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';

    } else {
        skillsSection!.style.display = 'none';

    }
});