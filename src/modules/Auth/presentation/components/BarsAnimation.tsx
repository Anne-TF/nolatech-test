import '../scss/bars-animation.scss';

export function BarsAnimation() {
  return (
      <>
          <div className="bars-animation absolute top-0 left-2">
              {[...Array(8)].map((_, index) => {
                  return (
                      <span key={index} className={`bar bar-${index + 1}`}/>
                  );
              })}
          </div>
      </>
  );
}