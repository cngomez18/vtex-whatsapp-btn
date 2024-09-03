import React from 'react'
import PropTypes from 'prop-types'

type Props={
  logo: string,
  phone: string,
  message: string,
  width: number,
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props ) => {

  const formatMessage = message.replace(/ /g, "%20")

  return (
    <div className='fixed bottom-2 right-2 flex flexColumn z-3'>
      <a
        href={`https://wa.me/${phone}?text=${formatMessage}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={logo}
          alt={message}
          width={width}
          height={height}
        />
      </a>
    </div>
  )
}
WhatsappButton.propTypes ={
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

WhatsappButton.defaultProps = {
  logo: 'logo.png',
  phone: '1234516171',
  message: 'default message from component',
  width: 100,
  height: 100
}

WhatsappButton.schema = {
  title: 'whatsapp button',
  type: 'object',
  properties: {
    logo: {
      title: 'whatsapp logo',
      type: 'string',
      widget:{
        "ui:widget": "image-uploader"
      }
    },
    phone:{
      title: 'whatsapp phone',
      type: 'string',
      description: 'Please add the phone number'
    },
    message: {
      title: 'whatsapp message',
      type: 'string',
      description: 'Please add the message for your client',
      widget:{
        "ui:widget": "textarea"
      }
    },
    width: {
      title: 'whatsapp logo width',
      type: 'string',
      description: 'Please add the logo width '
    },
    height: {
      title: 'whatsapp logo height',
      type: 'string',
      description: 'Please add the logo height'
    }
  }
}

export default WhatsappButton
