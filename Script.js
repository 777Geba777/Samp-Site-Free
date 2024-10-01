let money = 0;
let wantedLevel = 0;
let selectedLocation = '';
let selectedFaction = '';
let currentMission = null;
const completedMissions = new Set();
let eventInterval;
let isPrison = false;

const missionsData = {
    // ... (mantém os dados de missões)
};

function chooseClass(className) {
    resetGame();
    // ... (código existente)
    startEventSystem(); // Inicia o sistema de eventos
}

function selectLocation(location) {
    if (isPrison) return; // Impede seleção se estiver preso
    selectedLocation = location;
    updateMissions();
}

function updateMissions() {
    if (isPrison) return; // Impede atualização se estiver preso
    const missionOptions = document.getElementById('mission-options');
    missionOptions.innerHTML = '';
    const locationMissions = missionsData[selectedFaction][selectedLocation] || [];
    // ... (código existente)
}

function selectMission(mission) {
    if (isPrison) return; // Impede seleção de missões se estiver preso
    currentMission = mission;
    // ... (código existente)
}

function acceptMission() {
    if (isPrison) return; // Impede aceitação de missões se estiver preso
    // ... (código existente)
}

function cancelMission() {
    if (isPrison) return; // Impede cancelamento de missões se estiver preso
    // ... (código existente)
}

function resetMission() {
    // ... (código existente)
}

function resetGame() {
    clearInterval(eventInterval); // Para eventos ao reiniciar o jogo
    money = 0;
    wantedLevel = 0;
    selectedLocation = '';
    selectedFaction = '';
    completedMissions.clear();
    updateStatus();
    document.getElementById('start').classList.remove('hidden');
    document.getElementById('gameplay').classList.add('hidden');
}

function updateStatus() {
    document.getElementById('money').textContent = money;
    document.getElementById('wanted-level').textContent = wantedLevel;
}

function toggleStatus() {
    // ... (código existente)
}

function startEventSystem() {
    eventInterval = setInterval(randomEvent, 30000); // 30 segundos
}

function randomEvent() {
    // ... (código existente)
}

function prisonTime(seconds) {
    isPrison = true; // Define que o jogador está preso
    const message = document.createElement('div');
    // ... (código existente para estilo da mensagem)

    let remaining = seconds;
    const interval = setInterval(() => {
        message.textContent = `Você está preso! Restando ${remaining} segundos...`;
        remaining--;
        if (remaining < 0) {
            clearInterval(interval);
            message.textContent = "Você saiu da prisão.";
            isPrison = false; // Define que o jogador não está mais preso
            setTimeout(() => {
                document.body.removeChild(message);
                updateStatus();
            }, 2000);
        }
    }, 1000);
}
