import './Phrase.sass'

export interface PhraseProps {
  value: string
}

export const Phrase = (props: PhraseProps) => (
  <div id="phrase">
    <div id="phrase-wrapper">
      <span id="phrase-quote">“</span>
      <span id="phrase-value">{props.value}</span>
    </div>
  </div>
)