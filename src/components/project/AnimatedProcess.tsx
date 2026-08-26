import React, { useEffect, useState } from 'react';

export default function AnimatedProcess({ images }: { images?: string[] }) {
	const imgs = images ?? [];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (imgs.length <= 1) return;
		const id = setInterval(() => setIndex((i) => (i + 1) % imgs.length), 3000);
		return () => clearInterval(id);
	}, [imgs.length]);

	if (imgs.length === 0) {
		return <div className="h-80 md:h-105 flex items-center justify-center bg-[#0b0b0a] text-[#c9c3bb]">No process images</div>;
	}

	return (
		<div className="h-80 md:h-105 relative overflow-hidden rounded-md">
			<img src={imgs[index]} alt={`Process ${index + 1}`} className="w-full h-full object-contain" />
			<div className="absolute bottom-3 right-3 flex gap-2">
				{imgs.map((_, i) => (
					<button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`} aria-label={`Show slide ${i + 1}`} />
				))}
			</div>
		</div>
	);
}
