import { palette } from '@dendelion/palette';

const Swatch = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="relative w-30 h-26 rounded-[10px] shadow-md border border-neutral-300 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        />
        <div className="absolute inset-0 flex items-end justify-end p-2 text-[16px] text-black/50 font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
};

export const ThemePreview = () => {
  return (
    <div className="p-10 bg-[#fefdfb] min-h-screen font-sans mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">
        🎨 Dandelion Palette
      </h1>
      <div className="grid grid-cols-5 gap-1">
        {Object.entries(palette).map(([name, shades]) =>
          Object.entries(shades).map(([shade, color]) => (
            <Swatch key={name} name={`${name}.${shade}`} color={color} />
          )),
        )}
      </div>
    </div>
  );
};
