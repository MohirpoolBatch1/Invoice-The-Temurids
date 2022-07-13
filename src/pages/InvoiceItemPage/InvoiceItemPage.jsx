import React from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import arrowLeft from '../../assets/icon-arrow-left.svg'
// import datas from '../../data.json'
import Button from '../../components/Button/Button.jsx'
import {formatDate} from '../../utils/index'
import {
  useInvoicesQuery,
  useDeleteInvoiceMutation,
} from '../../services/invoiceApi'
import {constantColors} from '../../components/InvoiceItem/constantColors'
import ItemRow from './ItemRow.jsx'

function InvoiceItemPage() {
  const {invoiceId} = useParams()
  const navigate = useNavigate()
  const {data, error, isLoading, isSuccess} = useInvoicesQuery()
  console.log(data)
  const [deleteInvoice] = useDeleteInvoiceMutation()
  const handleDel = e => {
    e.preventDefault()
    console.log(invoiceId)
    deleteInvoice(invoiceId)
    // navigate('/')
  }
  /*
  INVOICE ITEM MA'LUMOTLARINI BACKENDDAN OLISH: Backendda hali
  invoice itemlarining xossalari to'liq berilmaganligi uchun
  va bor yo'gi 5ta xossagina bo'lgani uchun bu kod kommentga olindi.
  xossalar backendda to'liq berilgach kommentdan chiqazib qo'yiladi.
  */
  // const choiceInvoices data.find(item => item.id === invoiceId)
  // const choiceInvoices = data.find(d => d.id === invoiceId)
  // const choiceColorStatus = data && data.status
  // const [bgColor, textColor, dotColor] = constantColors[choiceColorStatus]
  // const {
  //   id,
  //   createdAt,
  //   paymentDue,
  //   description,
  //   clientName,
  //   clientEmail,
  //   status,
  //   senderAddress,
  //   clientAddress,
  //   items,
  //   total,
  // } = data

  return (
    <div className="w-full h-full overflow-x-hidden">
      {error && <div>Errorku</div>}
      {isLoading && <div>Loading</div>}
      {/* <button onClick={handleDel}>delete</button> */}
      <Button buttonKind="delete" onClick={handleDel} className="mr-2" />
    </div>
  )
}

export default InvoiceItemPage
