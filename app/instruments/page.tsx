import { listInstruments } from '../lib/data';
import CreateBlock from './create-block';

export default async function Instruments() {
  
    const allInstruments = await listInstruments();

  return (
    <>
        <CreateBlock />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {allInstruments.map((instrument) => (
        <div key={instrument.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800">{instrument.name}</h3>
        </div>
      ))}
    </div>
    </>

  )
}