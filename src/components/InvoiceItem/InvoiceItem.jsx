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
      <div className="flex bg-white w-[1100px] h-16 my-3 py-5 px-2 rounded-xl">
        <span className="font-bold mx-4">{id}</span>
        <span className="text-gray-300 w-32 mx-4">{clientPaymentDue}</span>
        <span className="text-gray-300 w-32 mx-4">{clientName}</span>
        <span className="font-bold text-right text-xl w-24 mx-10">
          {clientTotalExpanse}
        </span>
        <span
          className={`${bgColor} ${textColor} flex -mt-2  w-28 h-10 font-bold rounded-lg`}
        >
          <div className="flex m-auto">
            <div
              className={`h-2 w-2 ${dotBgColor} mt-2 mr-2 p-0.5 rounded-full`}
            ></div>{' '}
            {clientStatus}
          </div>
        </span>
        <span className="text-purple font-bold mx-4">&gt;</span>
      </div>
    </Link>
  )
}
