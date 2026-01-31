import React from 'react';
import {
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';

const COLORS = ['#8B7355', '#2C3E50', '#D4AF37', '#7F8C8D', '#16A085', '#2980B9', '#8E44AD', '#C0392B'];

interface ChartProps {
    data: any[];
}

export const VisitorTrafficChart: React.FC<ChartProps> = ({ data }) => (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B7355" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#8B7355" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} />
                <Tooltip
                    contentStyle={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Area
                    type="monotone"
                    dataKey="count"
                    name="Leads"
                    stroke="#8B7355"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorVisits)"
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const LeadPieChart: React.FC<ChartProps> = ({ data }) => (
    <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
        </ResponsiveContainer>
    </div>
);

// We'll use this for language or other categorical data
export const CategoricalBarChart: React.FC<ChartProps> = ({ data }) => (
    <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <Tooltip cursor={{ fill: 'rgba(139, 115, 85, 0.05)' }} />
                <Bar dataKey="value" fill="#8B7355" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);
