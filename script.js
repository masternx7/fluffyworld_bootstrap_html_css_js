
// Toggle Menu
function ToggleMenu(x) {
    x.classList.toggle("change");
}


//backtoTop
document.addEventListener("DOMContentLoaded", function () {
    const btnBackToTop = document.getElementById('btnBackToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            btnBackToTop.style.display = 'block';
        } else {
            btnBackToTop.style.display = 'none';
        }
    });

    btnBackToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.getElementById("copyIP").addEventListener("click", () => {
    const textToCopy = "fluffyworld.online";

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            const toastLiveIP = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveIP);

            toastBootstrap.show();
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

