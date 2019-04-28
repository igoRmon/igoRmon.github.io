var lgen = document.getElementById('lg-en');
var lgpt = document.getElementById('lg-pt');
var titulo = document.getElementById('titulo');
var descricao = document.getElementById('desc');

lgen.onclick = ()=>{
    lgen.style.cssText = 'color: #ee5253';
    lgpt.style.cssText = 'color: white';

    titulo.innerHTML = `Enthusiastic in 'IT'`;
    descricao.innerHTML = `
    Starter in programming, always willing to learn, is an IT enthusiast who has knowlegde in Java, C, 
    Javascript, SQL, HTML, CSS, UX / UI design. In addition, i like to deal with people and 
    is at the forefront of projects.`;
}

lgpt.onclick = ()=>{
    lgpt.style.cssText = 'color: #ee5253';
    lgen.style.cssText = 'color: white';

    titulo.innerHTML = `Entusiasta em 'TI'` ;
    descricao.innerHTML = `Iniciante em programação, sempre disposto a aprender, é um entusiasta de TI, tem conhecimento em Java, C, 
    Javascript, SQL, HTML, CSS, design UX / UI. Além disso, gosto de lidar com pessoas e está a frente de projetos.`;
}