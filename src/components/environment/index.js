import React, { useState, useEffect, useRef } from 'react'
import environment from '../../assets/gifs/CENARIO_anima.gif'
import { DivAlignEnv, ImgEnv } from './styles';
import CarComponent from '../car/index';
import RockComponent from '../rock';
import ModalComponent from '../modal';
import { ButtonStyled } from '../BtnStyled';
import TimerComponent from '../timer';

export default function EnvironmentComponent() {

    const [carPosition, setCarPosition] = useState(1) // POSIÇÕES (ESQUERDA, MEIO, DIREITA): 1 - 2 - 3 |||| 2 - 40 - 70
    const [rockPosition, setRockPosition] = useState(0)
    const [level, setLevel] = useState(1)
    const [timer, setTimer] = useState(0)
    const [timeToNextLvl, setTimeToNextLvl] = useState(30)
    const [areLose, setAreLose] = useState(false)
    const [areWin, setAreWin] = useState(false)
    const [isToShowModal, setIsToShowModal] = useState(false)
    const [speedRocksSeconds, setSpeedRocksSeconds] = useState(1)
    const [speedRocksMilis, setSpeedRocksMilis] = useState(1000)
    const [areWinTheGame, setAreWinTheGame] = useState(false)
    const [startingCount, setStartingCount] = useState(3)
    const [isStarting, setIsStarting] = useState(false)

    const carRef = useRef(carPosition);
    carRef.current = carPosition;
    const winRef = useRef(areWin);
    winRef.current = areWin;
    const loseRef = useRef(areWin);
    loseRef.current = areWin;
    const rockRef = useRef(rockPosition);
    rockRef.current = rockPosition;
    const startingCountRef = useRef(startingCount);
    startingCountRef.current = startingCount;

    const changeLevel = lvl => {
        setIsToShowModal(false)
        setAreLose(false)
        setAreWin(false)
        setTimer(0)
        setLevel(lvl)
    }

    const checkKeyAndPosition = (key, notPosition) => {
        if (carPosition === notPosition) {
            console.log('CANT MOVE TO THIS PLACE')
            return false;
        }
        return true
    }

    const handleKeyPress = e => {
        switch(e.keyCode) {
            case 37: 
                if ( checkKeyAndPosition(e.key, 1) === false ) {
                    break;
                }
                setCarPosition(carPosition - 1);
                break;
            case 39: 
                if ( checkKeyAndPosition(e.key, 3) === false ) {
                    break;
                }
                setCarPosition(carPosition + 1);
                break;
            case 65: 
                if ( checkKeyAndPosition(e.key, 1) === false ) {
                    break;
                }
                setCarPosition(1)
                break;
            case 83: 
                if ( checkKeyAndPosition(e.key, 2) === false ) {
                    break;
                }
                setCarPosition(2)
                break;
            case 68:
                if ( checkKeyAndPosition(e.key, 3) === false ) {
                    break;
                }
                setCarPosition(3)
                break;
            default:
                return;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress)
    })
    
    useEffect(() => {
        setIsStarting(true);
        const intervalCount = setTimeout(() => {
            if (startingCountRef.current === 1) {
                console.log('FINISHED COUNT')
                return setIsStarting(false)
            } 
            setStartingCount(state => state - 1)
        }, 1000)
        return () => clearTimeout(intervalCount)
        
    }, [startingCount])
    
    useEffect(() => {
        const timerCounter = setTimeout(() => {
            
            setTimer(state => state + 1)
        }, 1000)
        if (timer === timeToNextLvl) {
            clearInterval(timerCounter)
            setAreWin(true)
        }
        if (areWin || areLose || isStarting) {
            clearInterval(timerCounter)
        }
        return () => clearInterval(timerCounter);
    }, [timer, areWin, areLose, isStarting])
    
    useEffect(() => {
        const intervalRocks = setInterval(() => {
            let newRockPos = Math.floor(Math.random() * 3) + 1;
            setRockPosition(state => state === newRockPos ? (state === 1 ? 2 : (state === 2 ? 3 : 1) ) : newRockPos )
        }, speedRocksMilis)
        
        if (areWin || areLose|| isStarting) {
            clearInterval(intervalRocks)
        }
        return () => clearInterval(intervalRocks)
    }, [])

    useEffect(() => {
        let isToSpawnRocks = true
        if (areWin || areLose || isStarting) {
            isToSpawnRocks = false
        }
        const timeOut = setTimeout(() => {
            if (isToSpawnRocks && !winRef.current) {
                if (carRef.current === rockRef.current) { 
                    setAreLose(true)
                }
            }
        }, speedRocksMilis - 100)
        return () => clearTimeout(timeOut)
    }, [rockPosition])

    useEffect(() => {
        if (level === 5) {
            return setAreWinTheGame(true)
        }
        // setSpeedRocksSeconds( level === 1 ? 1 : (level === 2 ? 0.85 : (0.85 - ("0.0" + level))) );
        // setSpeedRocksMilis( level === 1 ? 1000 : (level === 2 ? 850 : (850 - (level * 10)) ) );
        setSpeedRocksSeconds( 1.00 - ("0.0" + (level * 3)) );
        setSpeedRocksMilis( 1000 - (level * 30) );

    }, [level])

    return (
        <DivAlignEnv>
            {
                isStarting &&
                <ModalComponent>
                    <h2>{startingCount}</h2>
                </ModalComponent>
            }
            <ImgEnv src={environment} />
            <TimerComponent>
                <p>Time: { timer }</p>
                <p>Level: { level }</p>
            </TimerComponent>
            {
                (!areWin && !areLose && !isStarting) &&
                <>
                    <CarComponent 
                        position={carPosition === 1 ? 5 : (carPosition === 2 ? 40 : 70)}
                    />
                    <RockComponent
                        position={rockPosition === 1 ? 35 : (rockPosition === 2 ? 45 : 55)}
                        speed={speedRocksSeconds}
                    />
                </>

            }
            {
                areWin && !areWinTheGame &&
                    <ModalComponent>
                        <h2>Congratulations!!!</h2>
                        <ButtonStyled
                            onClick={() => changeLevel(level + 1)}
                        >
                            Go to Level {level + 1}
                        </ButtonStyled>
                    </ModalComponent>
            }
            { 
                areLose &&
                    <ModalComponent>
                        <h2>Game Over :(</h2>
                        <ButtonStyled
                            onClick={() => changeLevel(1)}
                        >
                            Go to Level 1
                        </ButtonStyled>
                    </ModalComponent>
            }
            {
                areWinTheGame && 
                    <ModalComponent>
                        <h2>Congratulations!!! You made it!!!</h2>
                    </ModalComponent>
            }
        </DivAlignEnv>
    )
}
