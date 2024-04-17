export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full py-5 text-center">
      <p className="text-gray-500">
        2024 ©{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="./"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiser MultiPlayer
        </a>
      </p>
    </div>
  );
}
