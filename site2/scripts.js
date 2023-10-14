const $menu = document.getElementById('open-menu')
const $menu_bixo = document.getElementById('fundoId')
const $close_btn = document.querySelector('.CloseBtn')
$menu.addEventListener('click', () => {
    if($menu_bixo.style.left = '-450px')
    {
        $menu_bixo.style.left = '10px'
    }
})

$menu_bixo.addEventListener('click', () => {
    $menu_bixo.classList.remove('enter')
    $menu_bixo.classList.add('exit')
})
$close_btn.addEventListener('click', () => {
    $menu_bixo.style.left = '-450px'
})