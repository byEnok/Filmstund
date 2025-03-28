export const EmailTemplate = ({ emailName = 'krollemor', magicLink }) => (
  <div className="flex flex-col py-4 bg-background">
    <h1 className="text-center">
      Hei {emailName[0].toUpperCase()}
      {emailName.slice(1)}!
    </h1>
    <h2>Velkommen til Filmstund!</h2>
    <div className="py-4 text-center">
      Trykk{' '}
      <a href={magicLink} className="underline font-bold cursor-pointer">
        her
      </a>{' '}
      for å verifisere deg og logge inn!
    </div>
    {/* <div className="text-center">
      Verifiser deg: {''}
      <a href={magicLink} className="text-center underline font-bold cursor-pointer">
        Trykk her
      </a>
    </div> */}
    <div className="text-center pt-8">Har du spørsmål eller trenger hjelp?</div>
    <div className="text-center pt-2">
      Send meg en mail på{' '}
      <a href="mailto:" className="underline">
        support@filmstund.no
      </a>{' '}
    </div>
  </div>
)
