import axios from 'axios';
import type { IAdvice } from './models/Advice';

export const getAdvice = async ():Promise<IAdvice> => {

  const response = await axios.get<IAdvice>('https://api.adviceslip.com/advice')
  return response.data
  
  /* Mocked api to not call every time when developing
  return {slip: {
    "id": 128,
    "advice": "When you're at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket."
      }
    }
   */

}