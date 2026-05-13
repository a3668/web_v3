import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import birdImgSrc from "../../Bird/airpica.png";
import bgImgSrc from "../../Bird/flappybirdbg.png";
import bottomPipeImgSrc from "../../Bird/bottompipe.png";
import flapSoundSrc from "../../Bird/pixel.mp3";
import topPipeImgSrc from "../../Bird/toppipe.png";

const BOARD_WIDTH = 360;
const BOARD_HEIGHT = 640;
const BIRD_WIDTH = 68;
const BIRD_HEIGHT = 48;
const PIPE_WIDTH = 64;
const PIPE_HEIGHT = 512;
const PIPE_X = BOARD_WIDTH;
const PIPE_Y = 0;
const VELOCITY_X = -2;
const GRAVITY = 0.4;
const JUMP_FORCE = -6;
const FLOOR_OFFSET = 80;
const PIPE_INTERVAL = 1500;

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function createInitialBird() {
  return {
    x: BOARD_WIDTH / 8,
    y: BOARD_HEIGHT / 2,
    width: BIRD_WIDTH,
    height: BIRD_HEIGHT,
  };
}

export default function BirdPage() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const animationRef = useRef(0);
  const pipeTimerRef = useRef(0);
  const countdownTimerRef = useRef(0);
  const phaseRef = useRef("rules");
  const flapSoundRef = useRef(null);
  const assetsRef = useRef({
    background: null,
    bird: null,
    topPipe: null,
    bottomPipe: null,
  });
  const gameRef = useRef({
    bird: createInitialBird(),
    pipes: [],
    velocityY: 0,
    score: 0,
    gameOver: false,
    gameStarted: false,
  });

  const [phase, setPhase] = useState("rules");
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(3);

  const syncPhase = (nextPhase) => {
    phaseRef.current = nextPhase;
    setPhase(nextPhase);
  };

  const drawScene = () => {
    const context = contextRef.current;

    if (!context) {
      return;
    }

    const game = gameRef.current;
    context.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

    if (assetsRef.current.background?.complete) {
      context.drawImage(assetsRef.current.background, 0, 0, BOARD_WIDTH, BOARD_HEIGHT);
    }

    game.pipes.forEach((pipe) => {
      if (pipe.img?.complete) {
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
      }
    });

    if (assetsRef.current.bird?.complete) {
      context.drawImage(
        assetsRef.current.bird,
        game.bird.x,
        game.bird.y,
        game.bird.width,
        game.bird.height
      );
    }

    context.fillStyle = "white";
    context.font = "28px Arial";
    context.fillText(`分數: ${game.score}`, 12, 40);
  };

  const stopSound = () => {
    const flapSound = flapSoundRef.current;

    if (!flapSound) {
      return;
    }

    flapSound.pause();
    flapSound.currentTime = 0;
  };

  const playSound = () => {
    const flapSound = flapSoundRef.current;

    if (!flapSound) {
      return;
    }

    flapSound.currentTime = 0;
    flapSound.play().catch(() => {});
  };

  const resetGame = () => {
    gameRef.current = {
      bird: createInitialBird(),
      pipes: [],
      velocityY: 0,
      score: 0,
      gameOver: false,
      gameStarted: true,
    };
    setScore(0);
  };

  const placePipes = () => {
    const game = gameRef.current;

    if (game.gameOver || !game.gameStarted) {
      return;
    }

    const randomPipeY =
      PIPE_Y - PIPE_HEIGHT / 4 - Math.random() * (PIPE_HEIGHT / 2);
    const openingSpace = BOARD_HEIGHT / 4;

    game.pipes.push({
      img: assetsRef.current.topPipe,
      x: PIPE_X,
      y: randomPipeY,
      width: PIPE_WIDTH,
      height: PIPE_HEIGHT,
      passed: false,
    });

    game.pipes.push({
      img: assetsRef.current.bottomPipe,
      x: PIPE_X,
      y: randomPipeY + PIPE_HEIGHT + openingSpace,
      width: PIPE_WIDTH,
      height: PIPE_HEIGHT,
      passed: false,
    });
  };

  const finishGame = () => {
    const game = gameRef.current;
    game.gameOver = true;
    game.gameStarted = false;
    window.clearInterval(pipeTimerRef.current);
    window.cancelAnimationFrame(animationRef.current);
    stopSound();
    syncPhase("gameover");
    drawScene();
  };

  const update = () => {
    const game = gameRef.current;

    if (game.gameOver || !game.gameStarted) {
      return;
    }

    animationRef.current = window.requestAnimationFrame(update);

    game.velocityY += GRAVITY;
    game.bird.y = Math.max(game.bird.y + game.velocityY, 0);

    for (const pipe of game.pipes) {
      pipe.x += VELOCITY_X;

      if (!pipe.passed && game.bird.x > pipe.x + pipe.width) {
        pipe.passed = true;
        game.score += 1;
        setScore(game.score);
      }

      if (detectCollision(game.bird, pipe) || game.bird.y > BOARD_HEIGHT) {
        finishGame();
        return;
      }
    }

    game.pipes = game.pipes.filter((pipe) => pipe.x >= -PIPE_WIDTH);

    if (game.bird.y > BOARD_HEIGHT - FLOOR_OFFSET) {
      finishGame();
      return;
    }

    drawScene();
  };

  const startCountdown = () => {
    window.clearInterval(countdownTimerRef.current);
    window.clearInterval(pipeTimerRef.current);
    window.cancelAnimationFrame(animationRef.current);
    stopSound();
    resetGame();
    syncPhase("countdown");
    setCountdown(3);
    drawScene();

    let currentCount = 3;
    countdownTimerRef.current = window.setInterval(() => {
      setCountdown(currentCount);
      drawScene();
      currentCount -= 1;

      if (currentCount < 0) {
        window.clearInterval(countdownTimerRef.current);
        syncPhase("playing");
        playSound();
        placePipes();
        pipeTimerRef.current = window.setInterval(placePipes, PIPE_INTERVAL);
        update();
      }
    }, 1000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!(canvas instanceof HTMLCanvasElement)) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    canvas.width = BOARD_WIDTH;
    canvas.height = BOARD_HEIGHT;
    contextRef.current = context;

    const background = new Image();
    const bird = new Image();
    const topPipe = new Image();
    const bottomPipe = new Image();
    const flapSound = new Audio(flapSoundSrc);
    flapSound.preload = "auto";

    assetsRef.current = { background, bird, topPipe, bottomPipe };
    flapSoundRef.current = flapSound;

    const handleAssetLoad = () => {
      drawScene();
    };

    [background, bird, topPipe, bottomPipe].forEach((asset) => {
      asset.addEventListener("load", handleAssetLoad);
    });

    background.src = bgImgSrc;
    bird.src = birdImgSrc;
    topPipe.src = topPipeImgSrc;
    bottomPipe.src = bottomPipeImgSrc;

    const handleKeyDown = (event) => {
      if (event.code !== "Space" && event.code !== "ArrowUp") {
        return;
      }

      event.preventDefault();

      if (phaseRef.current === "rules") {
        startCountdown();
        return;
      }

      if (phaseRef.current === "countdown") {
        return;
      }

      gameRef.current.velocityY = JUMP_FORCE;

      if (phaseRef.current === "gameover") {
        startCountdown();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    drawScene();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearInterval(pipeTimerRef.current);
      window.clearInterval(countdownTimerRef.current);
      window.cancelAnimationFrame(animationRef.current);
      stopSound();

      [background, bird, topPipe, bottomPipe].forEach((asset) => {
        asset.removeEventListener("load", handleAssetLoad);
      });
    };
  }, []);

  return (
    <main className="bird-page">
      <div className="bird-shell">
        <div className="bird-page-header">
          <Link className="bird-back-link" to="/">
            回首頁
          </Link>
        </div>

        <div className="bird-board-wrap">
          <canvas ref={canvasRef} className="bird-board" />

          {phase === "rules" ? (
            <div className="bird-overlay bird-overlay-panel">
              <h2>遊戲規則</h2>
              <p>空白鍵或方向上鍵向上飛，不要撞到柱子。</p>
              <p>每通過一組柱子就會累計分數。</p>
              <button type="button" className="bird-button" onClick={startCountdown}>
                開始遊戲
              </button>
            </div>
          ) : null}

          {phase === "countdown" ? (
            <div className="bird-overlay bird-overlay-panel bird-overlay-compact">
              <h2>準備開始</h2>
              <p>{countdown}</p>
            </div>
          ) : null}

          {phase === "gameover" ? (
            <div className="bird-overlay bird-overlay-panel">
              <h2>遊戲結束</h2>
              <p>分數：{score}</p>
              <button type="button" className="bird-button" onClick={startCountdown}>
                再玩一次
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
