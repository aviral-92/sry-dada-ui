package com.doctor.ui.config;

import java.util.Scanner;

public class Demo {

	Scanner sc = null;

	public void array() {
		sc = new Scanner(System.in);
		System.out.println("Enter length of aaray");
		int a = sc.nextInt();

		int arr[] = new int[a];
		int arr_new[] = new int[a];
		System.out.println("enter elements ");
		for (int i = 0; i < a; i++) {
			arr[i] = sc.nextInt();
		}

		for (int i = 0; i < a; i++) {
			if (arr[i] % 2 == 0) {
				for (int j = 0; j < a; j = j + 2) {
					if (arr_new[j] == 0) {
						arr_new[j] = arr[i];
						break;
					}
				}
			} else {
				for (int j = 1; j <= a; j = j + 2) {
					if (arr_new[j] == 0) {
						arr_new[j] = arr[i];
						break;
					}
				}
			}
		}
		for (int i = 0; i < a; i++) {
			System.out.print(arr[i] + " ");
		}
		System.out.println();
		for (int i = 0; i < a; i++) {
			System.out.print(arr_new[i] + " ");
		}
	}

	public static void main(String[] args) {
		Demo d = new Demo();
		d.array();
	}
}
