import './Card.sass'

export interface CardProps {
  title: string
}

export const Card: React.FC<CardProps> = props => (
  <div className="card">
    <div className="card-title">{props.title}</div>
    <div className="card-content">
      {props.children}
    </div>
  </div>
)
