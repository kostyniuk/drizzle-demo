'use client'
import { useState } from "react";
import { createInstrument} from "../lib/data";

export default function CreateBlock() {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleCreateInstrument = async () => {
        if (!name.trim()) return;
        
        setIsLoading(true);
        try {
            await createInstrument({ name });
            setName(''); // Clear the input
        } catch (error) {
            console.error('Failed to create instrument:', error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="p-6">
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="border border-gray-300 rounded px-3 py-2 mr-2"
                placeholder="Enter instrument name"
                disabled={isLoading}
            />
            <button 
                onClick={handleCreateInstrument}
                disabled={isLoading || !name.trim()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Creating...' : 'Create Instrument'}
            </button> 
        </div>
    )
}