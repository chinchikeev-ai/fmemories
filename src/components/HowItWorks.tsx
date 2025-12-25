import { motion } from "framer-motion";
import { UserPlus, TreeDeciduous, Bell, Share2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Зарегистрируйся",
    description: "Создай аккаунт за 30 секунд — бесплатно и без карты",
    color: "mint",
  },
  {
    icon: TreeDeciduous,
    title: "Добавь семью",
    description: "Начни с себя и постепенно добавляй родных в древо",
    color: "pink",
  },
  {
    icon: Bell,
    title: "Настрой напоминания",
    description: "Укажи важные даты — мы напомним вовремя",
    color: "gold",
  },
  {
    icon: Share2,
    title: "Приглашай родных",
    description: "Дай доступ семье для совместного создания истории",
    color: "indigo",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Простой старт
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Четыре простых шага к сохранению истории вашей семьи
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card-strong p-8 h-full text-center group hover:shadow-glow transition-shadow duration-500">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                      step.color === "mint"
                        ? "bg-mint-soft"
                        : step.color === "pink"
                        ? "bg-pink-soft"
                        : step.color === "gold"
                        ? "bg-gold-soft"
                        : "bg-primary/10"
                    }`}
                  >
                    <step.icon className={`w-10 h-10 ${
                      step.color === "mint"
                        ? "text-accent-foreground"
                        : step.color === "pink"
                        ? "text-secondary-foreground"
                        : step.color === "gold"
                        ? "text-foreground"
                        : "text-primary"
                    }`} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Connector arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;