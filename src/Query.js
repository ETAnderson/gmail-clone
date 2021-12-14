import { collection, query, orderBy } from 'firebase/firestore'
import db from './firebase'

export const Query = () => {
  const Query= query(collection(db, 'emails'), orderBy("timestamp", "desc"));

  return Query
};