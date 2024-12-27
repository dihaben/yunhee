export default function Page({ title }: { title: string }) {
    return (
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-blue-600">
          {title}
        </h2>
        <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 w-64 mt-2"></div>
      </div>
    )
  }
  