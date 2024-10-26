interface HomeCardProps {
    title: string;
    content: string;
    icon: string;
    button: string;
  }
  
  export const HomeCard = ({ title, content, icon, button }: HomeCardProps) => {
    return (
      <div className="flex justify-center bg-background-light p-10 dark:bg-background-dark text-primary-light dark:text-primary-dark">
        <div className="card bg-gradient-to-t from-primary-light from-1% via-white to-white text-primary-content w-72 h-96">
          <div className="card-body">
            <h2 className="card-title justify-center align-middle text-black">{title}</h2>
            <p className="card-content align-middle text-black">{content}</p>
            <div>
              <img className="m-auto pt-0 pb-8" src={icon} alt="Arrow Target" />
              <div className="card-actions justify-center">
                <button className="btn bg-white border-primary-light text-black hover:bg-primary-dark hover:border-0 hover:text-white ">
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  