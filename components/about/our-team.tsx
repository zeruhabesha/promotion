'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface OurTeamCardProps {
  member: {
    name: string;
    image?: string;
    role?: string;
    bio?: string;
  };
  index: number;
  isInView: boolean;
}

const OurTeamCard: React.FC<OurTeamCardProps> = ({ member, index, isInView }) => {
  if (!member) return null;

  return (
    <Card
      className="overflow-hidden border"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * index}s`,
        borderColor: '#0e7490',
      }}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            {member.image ? (
              <AvatarImage src={member.image} alt={member.name} />
            ) : (
              <AvatarFallback>
                {member.name
                  ? member.name
                      .split(' ')
                      .map((n: string) => n[0])
                      .join('')
                  : ''}
              </AvatarFallback>
            )}
          </Avatar>
          <h3 className="text-lg font-bold" style={{ color: '#000' }}>{member.name}</h3>
          {member.role && (
            <p className="text-sm mb-2" style={{ color: '#0e7490' }}>{member.role}</p>
          )}
          {member.bio && (
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OurTeamCard;