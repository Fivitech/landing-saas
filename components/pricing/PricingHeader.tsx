export function PricingHeader() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that best fits your brokerage needs with no hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
}
