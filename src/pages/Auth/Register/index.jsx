import React, { useState } from 'react'

import SignUp from './components/SignUp'
import Password from './components/Password'
import Region from './components/Region'
import Verify from './components/Verify'
import VerifyB from './components/VerifyB'
import Congratulations from './components/Congratulations'



const Register = () => {
    const [quest, setQuest] = useState(1)


  return (
    <>
        {quest === 1 && <SignUp setQuest={setQuest} />}
        {quest === 2 && <Password setQuest={setQuest} />}
        {quest === 3 && <Region setQuest={setQuest} />}
        {quest === 4 && <Verify setQuest={setQuest} />}
        {/* {quest === 5 && <VerifyB setQuest={setQuest} />} */}
        {quest === 5 && <Congratulations setQuest={setQuest} />}
    </>
  )
}

export default Register