'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building, 
  Megaphone, 
  Users, 
  FileText, 
  MessageCircle, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Companies', href: '/admin/companies', icon: Building },
    { name: 'Promotions', href: '/admin/promotions', icon: Megaphone },
    { name: 'Categories', href: '/admin/categories', icon: FileText },
    { name: 'Subscriptions', href: '/admin/subscriptions', icon: Users },
    { name: 'Feedback', href: '/admin/feedback', icon: MessageCircle },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div 
      className={cn(
        'h-screen bg-card border-r flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="h-16 border-b flex items-center justify-between px-4">
        <Link href="/admin" className="flex items-center space-x-2">
          <Building className="h-6 w-6 text-primary" />
          {!collapsed && <span className="font-bold">Z-Group Admin</span>}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                pathname === item.href 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className={cn('flex-shrink-0 h-5 w-5', collapsed ? 'mx-auto' : 'mr-3')} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <div className={cn(
          'flex items-center',
          collapsed ? 'justify-center' : 'space-x-3'
        )}>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">A</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@zgroup.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}