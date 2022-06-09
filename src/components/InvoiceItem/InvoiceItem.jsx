import {Link} from 'react-router-dom'
import {constantColors} from './constantColors'

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
  const [bgColor, textColor, dotBgColor] =
    constantColors[status.replace(/"/g, '')]
  return (
    <Link to={`/invoice/${id}`}>
      <div className="flex bg-white h-12 mt-2 py-4 text-lg rounded-xl">
        <span className="font-bold w-12 mx-4 pl-3">{id}</span>
        <span className="text-gray-300 w-24 mx-4">{clientPaymentDue}</span>
        <span className="text-gray-300 w-24 mx-4">{clientName}</span>
        <span className="font-bold text-right text-xl w-24 mx-10">
          {clientTotalExpanse}
        </span>
        <span
          className={`${bgColor} ${textColor} flex -mt-2 w-24 h-8 font-bold rounded-lg`}
        >
          <div className="flex m-auto">
            <div
              className={`h-2 w-2 ${dotBgColor} mt-1 mr-2 p-0.5 rounded-full`}
            ></div>{' '}
            {clientStatus}
          </div>
        </span>
        <span className=" text-purple font-bold mx-4 pl-1">&gt;</span>
      </div>
    </Link>
  )
}
