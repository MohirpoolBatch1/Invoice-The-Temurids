import {Link} from 'react-router-dom'
import {constantColors} from './constantColors'
import rightArrow from '../../assets/icon-arrow-right.svg'

export default function InvoiceItem({
  id,
  paymentDue,
  clientName,
  total,
  status,
}) {
  const clientStatus = status.charAt(0).toUpperCase() + status.slice(1)
  const clientPaymentDue = `Due ${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(paymentDue))}`
  const clientTotalExpanse = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  }).format(total)
  const [bgColor, textColor] = constantColors[status]
  return (
    <Link to={`/invoice/${id}`}>
      <div className="flex items-center bg-white w-[43rem] h-12 my-1 py-4 text-lg rounded-xl">
        <span className="font-bold w-12 mx-6">{id}</span>
        <span className="text-gray-300 w-24 mx-6">{clientPaymentDue}</span>
        <span className="text-gray-300 w-24 mx-6">{clientName}</span>
        <span className="font-bold text-right text-xl w-24 mx-11">
          {clientTotalExpanse}
        </span>
        <span
          className={`bg-[${bgColor}] text-[${textColor}] flex w-24 h-8 font-bold rounded-lg`}
        >
          <div className="flex m-auto">
            <div
              className={`h-2 w-2 bg-[${textColor}] mt-1 mr-2 p-0.5 rounded-full`}
            ></div>{' '}
            {clientStatus}
          </div>
        </span>
        <span className=" text-purple font-bold mx-3 pr-2">
          <img src={rightArrow} alt="Right arrow" />
        </span>
      </div>
    </Link>
  )
}
