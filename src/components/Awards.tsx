import { Trophy, Star, TrendingUp, DollarSign } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Best Practice Awards",
      description: "Multiple recognitions for implementing industry-leading processes and standards",
      metric: "3x Winner"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "Consistently maintained exceptional customer satisfaction scores across all managed teams",
      metric: "95%+ Rating"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Optimization",
      description: "Identified and implemented strategies resulting in significant operational cost reductions",
      metric: "15% Savings"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Efficiency Improvements",
      description: "Streamlined workflows and processes leading to measurable productivity gains",
      metric: "20% Increase"
    }
  ];

  return (
    <section id="awards" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence and measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-display font-bold">{achievement.title}</h3>
                    <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {achievement.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
