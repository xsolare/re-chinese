import type { IHieroglyph } from '#/types/hieroglyph'
import type { FC } from 'react'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'
import { useNewStore } from '#/components/xsolare/helpers'

//* Components

//* Styles
import {
  PageContent,
  Answer,
  HieroglyphKeysAnswers,
  HieroglyphKeysQuestion,
  HieroglyphKeysScore,
  Hr
} from './key-item.style'
import { KeysTesterStore } from './keys-tester.store'

interface IKeysTesterProps {
  hieroglyphKeys: IHieroglyph[]
}

// KeysTester component
//* ------------------------------------------------------------------------------------------ *//
const KeysTester: FC<IKeysTesterProps> = (props) => {
  const { hieroglyphKeys } = props

  const pageRef = useRef<HTMLDivElement>(null)
  const store = useNewStore(KeysTesterStore, hieroglyphKeys)
  const { state, handleAnswer, score, lastAnswer, reloadQuestion } = store

  useEffect(() => {
    const ref = pageRef.current
    if (!ref) return

    ref.addEventListener('mousedown', reloadQuestion)
    return () => {
      ref.removeEventListener('mousedown', reloadQuestion)
    }
  }, [pageRef.current])

  return (
    <PageContent ref={pageRef}>
      <HieroglyphKeysScore>
        <div className="correct">{score.correct}</div>
        <div className="wrong">{score.wrong}</div>
      </HieroglyphKeysScore>
      <Hr className="upper" />
      <HieroglyphKeysQuestion isPinyin={state.isAnswered} isTranslate={state.isAnswered}>
        <div onClick={() => {}}>
          <div className="pinyin">{state.question.pinyin}</div>
          <div className="hieroglyph">{state.question.hieroglyph}</div>
          <div className="translate">{state.question.translate}</div>
        </div>
      </HieroglyphKeysQuestion>
      <Hr className="lower" />
      <HieroglyphKeysAnswers>
        {state.answersOptions.map((answer) => (
          <Answer
            isAnswered={state.isAnswered}
            isCorrect={lastAnswer?.question.id === answer.id}
            isWrong={
              lastAnswer?.answer.id !== lastAnswer?.question?.id &&
              lastAnswer?.answer.id === answer.id
            }
            key={answer.id}
            onClick={() => handleAnswer(answer)}>
            <div className="hieroglyph">{answer.hieroglyph}</div>
            <div className="pinyin">{answer.pinyin}</div>
            <div className="translate">{answer.translate}</div>
          </Answer>
        ))}
      </HieroglyphKeysAnswers>
    </PageContent>
  )
}

export default observer(KeysTester)
