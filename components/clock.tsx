type ClockProps = {
  lastUpdate: string,
  light: boolean
}
const Clock = ({ lastUpdate, light }: ClockProps) => {
  return (
    <div className={light ? 'light' : ''}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
}


export default Clock;

const format = t => t.toJSON().slice(11, 19) // cut off except hh:mm:ss