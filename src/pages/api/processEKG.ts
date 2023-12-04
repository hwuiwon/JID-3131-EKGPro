import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const pythonScriptPath: string = 'image_process.py';
    const imagePath: string = 'fullEKG1.jpeg';

    exec(`python3 ${pythonScriptPath} ${imagePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ message: "Error processing image:" + error });
        }

        res.status(200).json({ message: "Image processed successfully", data: stdout });
    });
}
