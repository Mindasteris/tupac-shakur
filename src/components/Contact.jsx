import React from 'react'
import { Formik, useFormik, validateYupSchema } from 'formik'
import * as YUP from 'yup'
import { useState } from 'react'

const Contact = () => {

  const [successMsg, setSuccessMsg] = useState(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      fav_album: 'NONE',
      message: '',
    },
    validationSchema: YUP.object({
      name: YUP.string().required('Name field cannot be empty'),
      email: YUP.string().required('Email field cannot be empty').email('Bad Email format (Not Allowed)'),
      fav_album: YUP.string(),
      message: YUP.string().required('Message field cannot be empty').min(10, 'Message must be at least 10 characters long').max(255, 'Message cannot exeed 255 characters'),
    }),
    onSubmit: function (values) {
      console.log(values);
      formik.resetForm()
      setSuccessMsg('Thank You! Message was sent.')
    }
  })

  return (
    <section id='contact'>
      <h1>Please Contact Us</h1>
      {/* Contact Form */}
        <form className='mt-12 mb-32' onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} />
          </div>
          {/* Error */}
          <div className='error'>
            {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : ''}
          </div>

          <div>
            <label htmlFor="text">Email</label>
            <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} />
          </div>
           {/* Error */}
           <div className='error'>
            {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : ''}
          </div>

          <div>
            <label htmlFor="fav_album">Favorite Album</label>
            <select name="fav_album" onChange={formik.handleChange} value={formik.values.fav_album}>
              <option defaultValue="NONE">None</option>
              <option value="2PACALYPSE NOW">2PACALYPSE NOW</option>
              <option value="STRICTLY FOR MY N.I.G.G.A.Z">STRICTLY FOR MY N.I.G.G.A.Z</option>
              <option value="THUG LIFE: VOLUME 1">THUG LIFE: VOLUME 1</option>
              <option value="ME AGAINST THE WORLD">ME AGAINST THE WORLD</option>
              <option value="ALL EYEZ ON ME">ALL EYEZ ON ME</option>
              <option value="THE DON KILLUMINATI">THE DON KILLUMINATI</option>
              <option value="RU STILL DOWN?">RU STILL DOWN?</option>
              <option value="GREATEST HITS">GREATEST HITS</option>
              <option value="STILL I RISE">STILL I RISE</option>
              <option value="UNTIL THE END OF TIME">UNTIL THE END OF TIME</option>
              <option value="BETTER DAYZ">BETTER DAYZ</option>
              <option value="TUPAC: RESURRECTION">TUPAC: RESURRECTION</option>
              <option value="LOYAL TO THE GAME">LOYAL TO THE GAME</option>
              <option value="PAC'S LIFE">PAC'S LIFE</option>
              <option value="BEST OF 2PAC, PART 1: THUG">BEST OF 2PAC, PART 1: THUG</option>
              <option value="BEST OF 2PAC, PART 2: LIFE">BEST OF 2PAC, PART 2: LIFE</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows='10' onChange={formik.handleChange} value={formik.values.message}></textarea>
          </div>
           {/* Error */}
           <div className='error'>
            {formik.touched.message && formik.errors.message ? <span>{formik.errors.message}</span> : ''}
          </div>

          <button type='submit'>Submit</button>

           {/* Success Message */}
           <div className={successMsg ? 'success' : ''}>
            <p>{successMsg}</p>
          </div>

        </form>
    </section>
  )
}

export default Contact