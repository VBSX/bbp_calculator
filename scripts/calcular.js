// Definição das variáveis globais para os valores dos tiers
var t1_fundacao_valor = 0;
var t1_parede_valor = 0;
var t1_meia_parede_valor = 0;
var t1_janela_valor = 0;
var t1_porta_valor = 0;
var t1_telhado_valor = 0;
var t1_chao_valor = 0;
var t1_telhado_escada_valor = 0;
var t1_escadas_valor = 0;
var t1_rampa_valor = 0;
var t1_rampa_larga_valor = 0;

var t2_fundacao_valor = 0;
var t2_parede_valor = 0;
var t2_meia_parede_valor = 0;
var t2_janela_valor = 0;
var t2_porta_valor = 0;
var t2_telhado_valor = 0;
var t2_chao_valor = 0;
var t2_telhado_escada_valor = 0;
var t2_escadas_valor = 0;
var t2_rampa_valor = 0;
var t2_rampa_larga_valor = 0;

var t3_fundacao_valor = 0;
var t3_parede_valor = 0;
var t3_meia_parede_valor = 0;
var t3_janela_valor = 0;
var t3_porta_valor = 0;
var t3_telhado_valor = 0;
var t3_chao_valor = 0;
var t3_telhado_escada_valor = 0;
var t3_escadas_valor = 0;
var t3_rampa_valor = 0;
var t3_rampa_larga_valor = 0;

function atualizarValores() {
    // Tier 1
    t1_fundacao_valor = document.getElementById('t1_fundacao').value;
    t1_parede_valor = document.getElementById('t1_parede').value;
    t1_meia_parede_valor = document.getElementById('t1_meia_parede').value;
    t1_janela_valor = document.getElementById('t1_janela').value;
    t1_porta_valor = document.getElementById('t1_porta').value;
    t1_telhado_valor = document.getElementById('t1_telhado').value;
    t1_chao_valor = document.getElementById('t1_chao').value;
    t1_telhado_escada_valor = document.getElementById('t1_telhado_escada').value;
    t1_escadas_valor = document.getElementById('t1_escadas').value;
    t1_rampa_valor = document.getElementById('t1_rampa').value;
    t1_rampa_larga_valor = document.getElementById('t1_rampa_larga').value;

    // Tier 2
    t2_fundacao_valor = document.getElementById('t2_fundacao').value;
    t2_parede_valor = document.getElementById('t2_parede').value;
    t2_meia_parede_valor = document.getElementById('t2_meia_parede').value;
    t2_janela_valor = document.getElementById('t2_janela').value;
    t2_porta_valor = document.getElementById('t2_porta').value;
    t2_telhado_valor = document.getElementById('t2_telhado').value;
    t2_chao_valor = document.getElementById('t2_chao').value;
    t2_telhado_escada_valor = document.getElementById('t2_telhado_escada').value;
    t2_escadas_valor = document.getElementById('t2_escadas').value;
    t2_rampa_valor = document.getElementById('t2_rampa').value;
    t2_rampa_larga_valor = document.getElementById('t2_rampa_larga').value;

    // Tier 3
    t3_fundacao_valor = document.getElementById('t3_fundacao').value;
    t3_parede_valor = document.getElementById('t3_parede').value;
    t3_meia_parede_valor = document.getElementById('t3_meia_parede').value;
    t3_janela_valor = document.getElementById('t3_janela').value;
    t3_porta_valor = document.getElementById('t3_porta').value;
    t3_telhado_valor = document.getElementById('t3_telhado').value;
    t3_chao_valor = document.getElementById('t3_chao').value;
    t3_telhado_escada_valor = document.getElementById('t3_telhado_escada').value;
    t3_escadas_valor = document.getElementById('t3_escadas').value;
    t3_rampa_valor = document.getElementById('t3_rampa').value;
    t3_rampa_larga_valor = document.getElementById('t3_rampa_larga').value;
}

// Função para calcular toras
function calcularToras() {
	var valor_total 
	if (valor_total){return valor_total}
	else{
		return 0
	}
    
}

// Função para calcular tábuas
function calcularTabuas() {
    // Adicione aqui a lógica para calcular o número de tábuas
}

// Função para calcular pregos
function calcularPregos() {
    // Adicione aqui a lógica para calcular o número de pregos
}

// Função para calcular placas de metal
function calcularPlacasMetal() {
    // Adicione aqui a lógica para calcular o número de placas de metal
}

// Função para calcular pedras grandes
function calcularPedrasGrandes() {
    // Adicione aqui a lógica para calcular o número de pedras grandes
}

// Função para calcular tijolos
function calcularTijolos() {
    // Adicione aqui a lógica para calcular o número de tijolos
}

// Função para calcular mortar mix
function calcularMortarMix() {
    // Adicione aqui a lógica para calcular a quantidade de mortar mix
}

// Função para atualizar os elementos de resultado na página
function atualizarResultados() {
    atualizarValores();
	// Obter os valores calculados
    var toras = calcularToras();
    var tabuas = calcularTabuas();
    var pregos = calcularPregos();
    var placasMetal = calcularPlacasMetal();
    var pedrasGrandes = calcularPedrasGrandes();
    var tijolos = calcularTijolos();
    var mortarMix = calcularMortarMix();

    // Atualizar os elementos de resultado na página
    document.getElementById('Toras').textContent = "Toras necessárias: " + toras;
    document.getElementById('tabuas').textContent = "Tábuas necessárias: " + tabuas;
    document.getElementById('pregos').textContent = "Pregos necessários: " + pregos;
    document.getElementById('placa_metal').textContent = "Placas de metal necessárias: " + placasMetal;
    document.getElementById('pedras_grandes').textContent = "Pedras grandes necessárias: " + pedrasGrandes;
    document.getElementById('tijolo_concreto').textContent = "Tijolos necessários: " + tijolos;
    document.getElementById('mortar_mix').textContent = "Mortar Mix necessários: " + mortarMix;
	
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tier1').addEventListener('input', atualizarResultados);
    document.getElementById('tier2').addEventListener('input', atualizarResultados);
    document.getElementById('tier3').addEventListener('input', atualizarResultados);
	

});