import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, PiggyBank } from 'lucide-react';
import { calculateTip, calculateTotal } from '../utils/calculations';

function TipCalculator() {
  const [bill, setBill] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<string>('15');
  
  const tipAmount = calculateTip(Number(bill), Number(tipPercentage));
  const total = calculateTotal(Number(bill), tipAmount);

  const predefinedTips = ['10', '15', '20', '25'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Calculator className="w-8 h-8 text-purple-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Tip Calculator</h1>
        </div>

        <div className="space-y-6">
          {/* Bill Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bill Amount
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Tip Percentage Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tip Percentage
            </label>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {predefinedTips.map((tip) => (
                <button
                  key={tip}
                  onClick={() => setTipPercentage(tip)}
                  className={`py-2 rounded-lg transition-colors ${
                    tipPercentage === tip
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {tip}%
                </button>
              ))}
            </div>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                placeholder="Custom tip %"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tip Amount:</span>
              <span className="text-lg font-semibold text-purple-600">
                ${tipAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <div className="flex items-center">
                <PiggyBank className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600">Total to Pay:</span>
              </div>
              <span className="text-xl font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;