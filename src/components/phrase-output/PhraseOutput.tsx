import './PhraseOutput.sass'

export interface PhraseOutputProps {
  value: string
}

export const PhraseOutput = (props: PhraseOutputProps) => (
  <div id="phrase-output">
    <div id="phrase-output-wrapper">
      <span id="phrase-output-quote">“</span>
      <span id="phrase-output-value">{props.value}</span>
    </div>
  </div>
)